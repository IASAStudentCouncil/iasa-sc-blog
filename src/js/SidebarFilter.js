import React from 'react';
import { useBlogPosts } from '@docusaurus/theme-common';

function SidebarFilter({ tag }) {
    const { blogPosts } = useBlogPosts();
    const filteredPosts = blogPosts.filter(post => post.metadata.tags.includes(tag));

    return (
        <div>
        {filteredPosts.map(post => (
            <div key={post.id}>
            <a href={post.permalink}>{post.title}</a>
            </div>
        ))}
        </div>
    );
}

export default SidebarFilter;
