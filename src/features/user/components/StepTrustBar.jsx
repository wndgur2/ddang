import PropTypes from 'prop-types'
import { useState } from 'react'

function StepTrustBar({ steps }) {
  const [currentStep, setCurrentStep] = useState(0) // 초기 단계

  // 단계 클릭 핸들러
  const onStepClick = index => {
    setCurrentStep(index)
  }

  return (
    <div className='relative w-full'>
      {/* 배경 막대 */}
      <div className='w-full bg-gray-200 h-2 rounded-full'></div>

      {/* 파란색 진행 상태 */}
      <div
        className='absolute top-0 left-0 h-2 bg-ddblue-400 rounded-full'
        style={{
          width: `${(currentStep / (steps - 1)) * 100}%`,
        }}
      ></div>

      {/* 단계 표시 원 */}
      <div className='flex justify-between w-full relative z-10'>
        {Array.from({ length: steps }).map((_, index) => (
          <div
            key={index}
            onClick={() => onStepClick(index)} // 클릭 이벤트
            className={`w-2 h-2 ${
              index <= currentStep ? 'bg-white' : 'bg-white'
            } rounded-full cursor-pointer`}
            style={{
              position: 'absolute',
              top: '50%',
              left: `${(index / (steps - 1)) * 100}%`,
              transform: 'translate(-50%, -100%) scale(0.8)', // 중앙 정렬 및 크기 조정
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

StepTrustBar.propTypes = {
  steps: PropTypes.number.isRequired, // 단계 개수
}

export default StepTrustBar
