import SkeletonElement from "./SkeletonElement"
import Shimmer from "./Shimmer"


const SkeletonProducts = () => {
  return (
    <div className="skeleton-wrapper  ">
    <div className="skeleton-products flex flex-col items-center justify-between  w-80   bg-gray-100 rounded-md my-5 p-5">
        <SkeletonElement type="thumbnail" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="price" />

    </div>
    <Shimmer />
    </div>
  )
}

export default SkeletonProducts