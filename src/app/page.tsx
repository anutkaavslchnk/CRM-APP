import AddCompanyButton from "./components/add-company-button";
import MagicButton from "./components/magic-button";
// import ClientComponent from "./components/client-component";
// import ServerComponent from "./components/server-component";
// import ServerComponentCopy from "./components/server-component-copy";




export default function Home() {
  return (
   <main>
    <h1 className="text-xl">Home page</h1>

    <AddCompanyButton></AddCompanyButton>
  <MagicButton></MagicButton>
   </main>
  );
}
