//Def. -> JSX is a syntactic sugar over React.createElement that produces Javascript objects representing UI which React reconciles and renders.

//JS ehlps to describe UI declaratively.

//For example,

//i. const element = <Text>Hello</Text>

//    converted to 👇

//ii. const element = React.createElement(
// Text,
// null,
// "Hello"
// )

//   converted to plain JS as 👇

//iii. {
//        type:Text,
//         props:{
//           children : "Hello"
//     }
// }
