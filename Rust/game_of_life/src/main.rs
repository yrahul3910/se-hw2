use std::collections::HashMap;
use std::collections::HashSet;
 
type Cell = (i32, i32);
type Colony = HashSet<Cell>;
 
fn print_colony(col: &Colony, width: i32, height: i32) {
    for y in 0..height {
        for x in 0..width {
            print!("{} ",
                if col.contains(&(x, y)) {"O"}
                else {"."}
            );
        }
        println!();
    }
}
 
fn neighbours(&(x,y): &Cell) -> Vec<Cell> {
    vec![
        (x-1,y-1), (x,y-1), (x+1,y-1),
        (x-1,y),            (x+1,y),
        (x-1,y+1), (x,y+1), (x+1,y+1),
    ]
}
 
fn neighbour_counts(col: &Colony) -> HashMap<Cell, i32> {
    let mut ncnts = HashMap::new();
    for cell in col.iter().flat_map(neighbours) {
        *ncnts.entry(cell).or_insert(0) += 1;
    }
    ncnts
}
 
fn generation(col: Colony) -> Colony {
    neighbour_counts(&col)
        .into_iter()
        .filter_map(|(cell, cnt)|
            match (cnt, col.contains(&cell)) {
                (2, true) |
                (3, ..) => Some(cell),
                _ => None
        })
        .collect()
}
 
fn life(init: Vec<Cell>, iters: i32, width: i32, height: i32) {
    let mut col: Colony = init.into_iter().collect(); 
    for i in 0..iters+1
    {
        println!("({})", &i);
        if i != 0 {
            col = generation(col);
        }
        print_colony(&col, width, height);
    }
}
 
fn main() {
    let mut arr: Vec<(i32, i32)> = Vec::new();

    for i in 0..50
    {
        for j in 0..20
        {
            if rand::random()
            {
                arr.push((i,j));
            }
        }
    }
    life(arr, 100, 50, 20);
 
}

#[cfg(test)]
mod tests
{
    use crate::neighbours;
    use crate::generation;
    use crate::Colony;

    #[test]
    fn basic()
    {
        assert_eq!(2 + 2, 4);
    }

    #[test]
    fn test_neighbors()
    {
        assert_eq!(neighbours(&(4, 3)), vec![
                   (3, 2), (4, 2), (5, 2),
                   (3, 3),         (5, 3),
                   (3, 4), (4, 4), (5, 4)
        ])
    }

    #[test]
    fn test_blinker()
    {
        let map: Vec<(i32, i32)> = vec![(2, 1), (2, 2), (2, 3)];
        let col: Colony = map.into_iter().collect();
        let mut col_fin: Colony = vec![(2, 1), (2, 2), (2, 3)].into_iter().collect();
        col_fin = generation(col_fin);
        col_fin = generation(col_fin);

        assert_eq!(col.is_disjoint(&col_fin), false);
    }

    #[test]
    fn test_beehive()
    {
        let map: Vec<(i32, i32)> = vec![(1, 2), (1, 3), (2, 1), (2, 4), (3, 2), (3, 3)];
        let col: Colony = map.into_iter().collect();
        let mut col_fin: Colony = vec![(1, 2), (1, 3), (2, 1), (2, 4), (3, 2), (3, 3)];
        col_fin = generation(col_fin);

        assert_eq!(col.is_disjoint(&col_fin), false);
    }
}
