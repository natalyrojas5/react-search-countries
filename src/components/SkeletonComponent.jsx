const SkeletonComponent = ({ typeSeketon }) => {
  return (
    <div className="skeleton-wrapper">
      <div className={"skeleton " + "skeleton-" + typeSeketon}></div>
      <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </div>
  );
};

export default SkeletonComponent;
