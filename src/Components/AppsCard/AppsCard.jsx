const AppsCard = ({ data }) => {
    const { image, title, companyName, ratingAvg, size, downloads, description } = data || {};

    return (

        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{ratingAvg}</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{downloads}</div>
      <div className="badge badge-outline">{companyName}</div>
    </div>
  </div>
</div>

    );
};

export default AppsCard;