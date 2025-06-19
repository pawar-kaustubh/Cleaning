import CategorySideBar from "./_components/CategorySideBar";

export default function Layout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-4 mt-8">
        <div>
          
          {/* Side Category Nav bar */}
          <CategorySideBar />
        </div>
        <div className="col-span-3">{children}</div>
      </div>
    </div>
  );
}
