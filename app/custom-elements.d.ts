declare global {
  declare module "react" {
    namespace JSX {
      interface IntrinsicElements {
        "my-button": { label: string };
      }
    }
  }
}