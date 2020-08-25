package main

import (
	"testing"
)

//func TestNewField(t *testing.T) {
//	var field Field = NewField(1,1)
//	if(field.w != 1 ||field.h != 1){
//       t.Errorf("func NewField not work")
//	}
//}

func Test(t *testing.T) {
	checkSet := func(t *testing.T, f Field){
		f.Set(0,0,true)
		if(f.s[0][0] != true){
       		t.Errorf("func Set not work")
		}
	}

	checkNext := func(t *testing.T, f Field){
		var ans bool = f.Next(1,1)
		if(ans != true){
       		t.Errorf("func Next not work")
		}
	}

	checkState := func(t *testing.T, f Field){
		var ans bool = f.State(1,1)
		if(ans != true){
       		t.Errorf("func State not work")
		}
	}

	checkStep := func(t *testing.T, l *Life){
		l.Step()
		if(l.a.s[1][1] != true){
       		t.Errorf("func Step not work")
		}
	}


	t.Run("TestNewField", func(t *testing.T) {
		var field Field = NewField(1,1)
		if(field.w != 1 ||field.h != 1){
       		t.Errorf("func NewField not work")
		}
	})

	t.Run("TestSet", func(t *testing.T) {
        var field Field = NewField(1,1)
        checkSet(t, field)
    })

    t.Run("TestNext", func(t *testing.T) {
        var field Field = NewField(3,3)
        field.Set(0,0,true)
        field.Set(0,1,false)
        field.Set(0,2,false)
        field.Set(1,0,true)
        field.Set(1,1,true)
        field.Set(1,2,false)
        field.Set(2,0,false)
        field.Set(2,1,false)
        field.Set(2,2,false)
        checkNext(t, field)
    })

    t.Run("TestState", func(t *testing.T) {
        var field Field = NewField(3,3)
        field.Set(0,0,false)
        field.Set(0,1,false)
        field.Set(0,2,false)
        field.Set(1,0,false)
        field.Set(1,1,true)
        field.Set(1,2,false)
        field.Set(2,0,false)
        field.Set(2,1,false)
        field.Set(2,2,false)
        checkState(t, field)
    })

    t.Run("TestNewLife", func(t *testing.T) {
		l := NewLife(20, 20)
		if(l.w != 20 ||l.h != 20){
       		t.Errorf("func NewLife not work")
		}
	})

	t.Run("TestStep", func(t *testing.T) {
        l := NewLife(3, 3)
        l.a.Set(0,0,true)
        l.a.Set(0,1,false)
        l.a.Set(0,2,false)
        l.a.Set(1,0,true)
        l.a.Set(1,1,true)
        l.a.Set(1,2,false)
        l.a.Set(2,0,false)
        l.a.Set(2,1,false)
        l.a.Set(2,2,false)
        checkStep(t, l)
    })
}