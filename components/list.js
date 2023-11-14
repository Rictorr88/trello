import Image from "next/image"

function List({ title, children, handleDrop, id }) {
    function handleDragOver(event) {
        event.preventDefault()
    }
    
    return (
      <div data-id={id} className="relative flex-1" onDragOver={handleDragOver} onDrop={handleDrop}>
        <div className="absolute inset-0 flex flex-col flex-1 gap-4 p-4 text-gray-900 rounded bg-slate-300">
          <div>
            <h2 className="font-bold "> {title} </h2>
          </div>
          <div className="flex flex-col gap-4 overflow-auto">{children}</div>
          <div className="flex gap-1 text-center">
            <span className="flex gap-1">
              <Image src="/add.svg" width={20} height={20} />
            </span>
            <h2>Añada una tarjeta</h2>
          </div>
        </div>
      </div>
    )
}

export default List
