import MaterialIcon from '@/components/icons/MaterialIcon'
import SearchHistory from './SearchHistory'
import categories from '../data/categories'
import bag from '@/assets/images/categories/bag.jpeg'

function SearchPage() {
  return (
    <div className='flex flex-col '>
      <div className='flex items-center gap-2 p-3 font-bold text-gray-700'>
        <MaterialIcon name='search_activity' size={24} />
        <p>최근 검색어</p>
      </div>
      <SearchHistory text='캔버스화' />
      <SearchHistory text='삼성 노트북' />
      <SearchHistory text='큰 소파' />
      <div className='flex flex-col mt-4 gap-2 px-2'>
        {categories.map((category, index) => (
          <div key={index} className='flex flex-col gap-2 p-2 text-gray-950'>
            <p className='font-bold mb-1'>{category.name}</p>
            <div className='flex flex-wrap gap-4'>
              {category.subcategories.map((subCategory, index) => (
                <div key={index} className='w-[30%]'>
                  <img src={bag} alt='' className='rounded-xl' />
                  <p className='text-center mt-1'>{subCategory.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchPage
