import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import IconButton from '../buttons/IconButton'
import { useState } from 'react'
import Modal from '../modals/Modal'
import DefaultButton from '../buttons/DefaultButton'

function DropDownHeader({ back, feature, routes, title }) {
  const router = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header
      className={`
        w-full h-[56px] px-4 py-2
        flex flex-row items-center justify-between
        border-b border-gray-200`}
    >
      <div className='min-w-12'>
        {back && (
          <IconButton
            icon={{
              name: 'keyboard_arrow_left',
              size: 28,
            }}
            onClick={() => {
              router(-1)
            }}
          />
        )}
      </div>

      <div
        className='relative flex items-center min-w-12'
        onClick={() => setShowMenu(!showMenu)}
      >
        <p className='font-bold text-lg'>{title}</p>
        <IconButton icon={{ name: 'arrow_drop_down', size: 20 }} />
        {showMenu && (
          <Modal close={() => setShowMenu(false)}>
            <div className='flex flex-col w-full gap-2 font-bold pt-2'>
              {routes.map(route => (
                <Link
                  key={route.to}
                  to={route.to}
                  className='flex text-gray-950'
                >
                  <DefaultButton type={route.name == title ? 'gray' : ''}>
                    {route.name}
                  </DefaultButton>
                </Link>
              ))}
            </div>
          </Modal>
        )}
      </div>
      <div className='min-w-12'>{feature && <span>{feature}</span>}</div>
    </header>
  )
}

DropDownHeader.propTypes = {
  back: PropTypes.bool,
  title: PropTypes.string.isRequired,
  routes: PropTypes.array,
  feature: PropTypes.element,
}
export default DropDownHeader
