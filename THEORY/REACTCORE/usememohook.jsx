// useMemo memoizes a computed value so React doesn’t recompute it on every render.
// useMemo prevents unnecessary recomputation of expensive values.

//For example, 
const result = expensiveCalculation(data);  // 👉This runs on every render.

//With useMemo
const result2 = React.useMemo(() => {
    return expensiveCalculation(data);
}, [data]);

