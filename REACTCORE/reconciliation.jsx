/*
Reconciliation is the process React uses to compare two virtual DOM trees (old vs new) and delete what changed.

Reconciliation = spot the difference between two pictures

//IMPORTANT//
3 CORE RECONCILIATION RULES (HEURISTICS)

1. Different element types => Delete old tree and cCreate a new one
Ex.  <Text>Hello</Text> --> <View>Hello</View>

2. Same element type => Reuse + update props
<Text color="red" /> (before)
<Text color="blue" /> (after)

3. Lists are compared using keys 
items.map(item => <Item key={item.id} />)

Without keys react matches by index (by position) which leads to bugs and bad performance.


*/