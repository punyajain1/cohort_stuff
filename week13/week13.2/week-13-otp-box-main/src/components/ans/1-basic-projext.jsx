export function Sidebar() {
    return (
        <div className="flex-col">
            <div className="transition-all duration-500 md:w-96 bg-red-300 w-0 hover:bg-teal-200 hover:text-2xl">sidebar</div>
            <div className="transition-all duration-1000 bg-green-300 p-4 hover:bg-yellow-200 hover:p-10 hover:text-5xl">Content</div>
            
        </div>
    );
}
