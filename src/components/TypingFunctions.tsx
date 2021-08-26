export default function TypingFunctions() {
  const greet = (name: string) => `Hello ${name.toUpperCase()}!!`;
  const ParamAnnotationExample = () => <p>{greet("James")}</p>;

  const meaningOfLife = (): number => 42;
  const ReturnAnnotationExample = () => <p>{meaningOfLife()}</p>;

  // notice how first and last are just type definitions
  // not destructured variables
  const printName = (obj: { first: string; last: string }) =>
    `Hi ${obj.first} ${obj.last}!`;
  const ObjectParamAnnotationExample = () => (
    <p>{printName({ first: "Howard", last: "Stark" })}</p>
  );

  // here we have both destructuring & param type definitions
  const printName2 = ({ first, last }: { first: string; last: string }) =>
    `Hi ${first} ${last}!`;
  const DestructuredObjectParamAnnotationExample = () => (
    <p>{printName2({ first: "Star", last: "Lord" })}</p>
  );

  interface conf {
    id?: string;
    r?: boolean;
  }
  const printPath = (
    path: string,
    { id, r }: conf = { r: false }
  ): undefined | string => {
    const fullPath = `${path}${id || ""}`;
    console.log(fullPath);
    if (r) {
      return fullPath;
    }
  };
  const MixedParamsExample = () => (
    <>
      <p>{printPath("/foo/", { id: "2", r: true })}</p>
      <p>{printPath("/foo/", { id: "3" })}</p>
      <p>{printPath("/foo/", { r: true })}</p>
      <p>{printPath("/foo/")}</p>
    </>
  );

  // union
  // aliases
  // assertions
  // literals
  return (
    <>
      <h2>Functions</h2>
      <ParamAnnotationExample />
      <ReturnAnnotationExample />
      <ObjectParamAnnotationExample />
      <DestructuredObjectParamAnnotationExample />
      <MixedParamsExample />
    </>
  );
}
