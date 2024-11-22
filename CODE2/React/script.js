// ! MODULE

// 1) -----> defualt exports
//2) ----> name exports

// named export
// export function Display() {
function Display() {
  console.log(" i am display Func");
}
// export {Display,add}; We can use multiple function in one export like that

// export function add(n1, n2) {
function add(n1, n2) {
  return n1 + n2;
}
export { Display, add };

//Default exports

 export default function substract(n1,n2) {
    return n1 - n2;
    
}
// export default substract;