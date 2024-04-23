# Notes

* **useCallback() Hook**
    - It is a React Hook that lets you cache a function definition between re-renders.
    - It memoised the method and use it when there is sone change in dependencied which are given.
    - Syntax: 
        ```javascript
        const cachedFn = useCallback(fn, dependencies)
        ```

* **useEffect() Hook**
    - useEffect is a React Hook that lets you synchronize a component with an external system.
    - It rerenders the page when there is a change in the given dependencies.
    - Syntax: 
        ```javascript
        useEffect(setup, dependencies?)
        ```

* **useRef() Hook**
    - useRef is a React Hook that lets you reference a value that’s not needed for rendering.
    - It is used when you want to refer something for a particular change.
    - Syntax: 
        ```javascript
        const ref = useRef(initialValue)
        ```

* How to make copy button?
    - Refer the target using useRef hook.
    - target_reference.current?.selected().
    - use the method: window.navigetor.clipboard.writeText().

    (You can do it without using useRef)