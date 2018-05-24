import * as React from 'react';
import * as Scrivito from 'scrivito';
import BlogPostAuthor from '../../Components/BlogPost/BlogPostAuthor';
import BlogPostMorePosts from '../../Components/BlogPost/BlogPostMorePosts';
import BlogPostNavigation from '../../Components/BlogPost/BlogPostNavigation';
import BlogPostTagList from '../../Components/BlogPost/BlogPostTagList';
import SchemaDotOrg from '../../Components/SchemaDotOrg';

Scrivito.provideComponent('DiconoDiNoiPost', ({ page }) =>
  <div>
    <section className='bg-white'>
      <div className='container'>
        <Scrivito.ContentTag tag="h1" className="h2" content={ page } attribute="title" />
        <Scrivito.ContentTag tag="h2" className="h4" content={ page } attribute="description" />
      </div>
    </section>
    <BlogPostAuthor author={ page.get('author') } />
  </div>
);
