import React from "react";
import PageTemplate from "components/common/PageTemplate";
import ListWrapper from "components/list/ListWrapper";
import PostList from "components/list/PostList";
import Pagintion from "components/list/Pagination";

const ListPage = () => {
	return (
		<div>
			<PageTemplate>
				<ListWrapper>
					<PostList/>
					<Pagintion/>
				</ListWrapper>
			</PageTemplate>
		</div>
	);
};

export default ListPage;
