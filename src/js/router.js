import VueRouter from 'vue-router'

import BookShelf from '../component/bookshelf/BookShelf.vue'
import SortBook from '../component/sort/SortBook.vue'
import SortDetails from '../component/sort/SortDetails.vue'
import BookDetails from '../component/sort/BookDetails.vue'
import BookCon from '../component/readbook/BookCon.vue'
import Rank from '../component/rank/rank.vue'
import My from '../component/my/my.vue'




export default new VueRouter({
	routes:[
		{path:'/bookshelf',component:BookShelf},
		{path:'/sortbook',component:SortBook},
		{path:'/sortdetails',component:SortDetails},
		{path:'/bookdetails',component:BookDetails},
		{path:'/bookcon',component:BookCon},
		{path:'/rank',component:Rank},
		{path:'/my',component:My},
		{path:'/',redirect:'/BookShelf'}
	]
})
