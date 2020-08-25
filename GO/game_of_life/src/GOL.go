package main

import (
	"bytes"
	"fmt"
	"math/rand"
	"time"
)

type Field struct {
	s    [][]bool //2D field with bloon value each
	w, h int //width & height
}

func NewField(w, h int) Field { //initialize the matrix without fill in value
	s := make([][]bool, h) //row
	for i := range s {
		s[i] = make([]bool, w) //col
	}
	return Field{s: s, w: w, h: h}
}



func (f Field) Set(x, y int, b bool) { //set bool in f at y x to b
	f.s[y][x] = b
}

func (f Field) Next(x, y int) bool {
	on := 0
	for i := -1; i <= 1; i++ { //-1,0,1
		for j := -1; j <= 1; j++ { //-1,0,1
			if f.State(x+i, y+j) && !(j == 0 && i == 0) { //count neighbour
				on++
			}
		}
	}
	return on == 3 || on == 2 && f.State(x, y) //next gen of life
}

func (f Field) State(x, y int) bool {
	for y < 0 {
		y += f.h
	}
	for x < 0 {
		x += f.w
	}
	return f.s[y%f.h][x%f.w]
}

type Life struct {
	w, h int
	a, b Field
}

func NewLife(w, h int) *Life {
	a := NewField(w, h)
	//for i := 0; i < (w * h / 2); i++ {
	//	a.Set(rand.Intn(w), rand.Intn(h), true)
	//}
	for i := 0; i < a.w; i++ {
		for j := 0; j < a.h; j++ {
			if rand.Float64() < 0.619  {
				 a.Set(i, j, true)
			}
		}
	}
	return &Life{
		a: a,
		b: NewField(w, h),
		w: w, h: h,
	}
}

func (l *Life) Step() {
	for y := 0; y < l.h; y++ {
		for x := 0; x < l.w; x++ {
			l.b.Set(x, y, l.a.Next(x, y))
		}
	}
	l.a, l.b = l.b, l.a
}

func (l *Life) String() string {
	var buf bytes.Buffer
	for y := 0; y < l.h; y++ {
		for x := 0; x < l.w; x++ {
			b := byte(' ')
			if l.a.State(x, y) {
				b = 'o'
			}
			buf.WriteByte(b)
		}
		buf.WriteByte('\n')
	}
	return buf.String()
}

func main() {
	l := NewLife(50, 20)
	for i := 0; i < 200; i++ {
		l.Step()
		//fmt.Print("\x0c")
		fmt.Printf("\033[2J")
		fmt.Printf("\033[1;1H")
		fmt.Printf("Generation %d\n",200-i)
		fmt.Println(l)
		time.Sleep(time.Second / 5)
	}
}
