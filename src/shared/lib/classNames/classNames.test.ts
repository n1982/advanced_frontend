import {classNames} from "./classNames";

describe('classNames', ()=>{
    test('ferst param', ()=>{
        expect(classNames('someClass')).toBe('someClass')
    })
    test('with additional', ()=>{
        const expected = 'someClass class1 class2'
        expect(classNames(
            'someClass',
            {},
            ['class1','class2']))
            .toBe(expected)
    })
    test('with mods', ()=>{
        const expected = 'someClass class1 class2 hovered visible'
        expect(classNames(
            'someClass',
            {hovered: true, visible: true},
            ['class1','class2']))
            .toBe(expected)
    })
    test('with mods false', ()=>{
        const expected = 'someClass class1 class2 hovered'
        expect(classNames(
            'someClass',
            {hovered: true, visible: false},
            ['class1','class2']))
            .toBe(expected)
    })
    test('with mods undefined', ()=>{
        const expected = 'someClass class1 class2 hovered'
        expect(classNames(
            'someClass',
            {hovered: true, visible: undefined},
            ['class1','class2']))
            .toBe(expected)
    })
})