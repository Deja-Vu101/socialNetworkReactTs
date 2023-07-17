interface PaginationProps {
	page: number;
	setPage: (action: number) => void;
	length: number;
 }
 
 const Pagination: React.FC<PaginationProps> = ({ page, setPage, length }) => {
	return (
	  <div className="Pages">
		 <button disabled={page == 1} onClick={() => setPage(page - 1)}>
			previous
		 </button>
 
		 <div className="page_number">{page}</div>
 
		 <button onClick={() => setPage(page + 1)} disabled={length == 0}>
			next
		 </button>
	  </div>
	);
 };

 export default Pagination;