const SkeletonComponent = ({ typeSeketon }) => {
  const CLASS = "skeleton-" + typeSeketon;
  return (
    <div className="skeleton-wrapper">
      <div className={"skeleton " + CLASS}></div>
      <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </div>
  );
};

export default SkeletonComponent;
