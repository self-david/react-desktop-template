import React from 'react'

const Icon = props => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='83.402' height='94.905' viewBox='0 0 83.402 94.905' {...props}>
      <defs>
        <linearGradient id='linear-gradient' y1='0.5' x2='1' y2='0.5'>
          <stop offset='0' stopColor='#f13' />
          <stop offset='1' stopColor='#da77ff' />
        </linearGradient>
      </defs>
      <g transform='translate(-1000 -10480)'>
        <path
          d='M19.822,24.557l2.346,2.521,2.594,2.789V58.295L18,63.475h4l1.275,2.295H33.988c7.008,0,12.3-1.348,15.723-4.41l0,0c4.31-3.839,6.379-9.776,6.379-17.412,0-7.072-2.058-12.31-6.271-15.2l-.01-.012,0,0c-.131-.09-.218-.227-.354-.312l-.867.992a14.892,14.892,0,0,0-1.375-1.426c-2.99-2.388-7.33-3.435-12.916-3.435Zm16.07,7.732a13.159,13.159,0,0,1,5.715,1.256l.27-.4c1.581,2.14,2.51,5.476,2.51,10.328,0,6.267-1.337,10.452-3.629,12.775v0h0a6.2,6.2,0,0,1-2.469,1.637,18.122,18.122,0,0,1-2.8.281V32.313c.113,0,.311-.023.4-.023Z'
          transform='translate(1004.879 10482.289)'
          fill='url(#linear-gradient)'
        />
        <path
          d='M36.743-2.837a4.371,4.371,0,0,0-2.143.564L-2.73,18.788A4.379,4.379,0,0,0-4.953,22.6v43.08A4.379,4.379,0,0,0-2.8,69.443L34.528,91.462a4.378,4.378,0,0,0,4.369.043L76.225,70.443h0a4.379,4.379,0,0,0,2.223-3.809V23.554A4.379,4.379,0,0,0,76.3,19.788L38.969-2.231A4.375,4.375,0,0,0,36.743-2.837ZM36.7,6.583,69.706,26.05V64.081L36.8,82.65,3.79,63.181V25.15Z'
          transform='translate(1004.953 10482.837)'
          fill='url(#linear-gradient)'
        />
      </g>
    </svg>
  )
}

const CloseIcon = props => {
  const { color = '#fff', ...rest } = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' {...rest}>
      <path
        d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
        fill={color}
      />
    </svg>
  )
}

const MinimizeIcon = props => {
  const { color = '#fff', ...rest } = props

  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <line x1='4' y1='18' x2='20' y2='18' stroke={color} strokeWidth='2' />
    </svg>
  )
}

const RestoreIcon = props => {
  const { color = '#fff', ...rest } = props

  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <rect x='5' y='5' width='14' height='14' rx='2' stroke={color} strokeWidth='2' />
    </svg>
  )
}

const CheckIcon = props => {
  const { color = '#ffffff', isChecked = true, ...rest } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 498.138 380' {...rest}>
      <g transform='translate(-533 -2)'>
        <g transform='translate(533 2)' fill='none' stroke={color} strokeWidth='41'>
          <rect width='380' height='380' rx='21' stroke='none' />
          <rect x='20.5' y='20.5' width='339' height='339' rx='0.5' fill='none' />
        </g>
        <g transform='translate(515 -231.157)'>
          <path
            d='M493.65,50.525a37.806,37.806,0,0,0-51.179-15.472c-22.059,11.816-42.9,23.982-62.82,36.717L338.7,99.7v96.212s.126-.056,40.946-32.592c30.092-22.165,62.312-42.213,98.529-61.615A37.808,37.808,0,0,0,493.65,50.525ZM338.7,99.7c-40.715,29.649-78.022,62.759-114.834,101.677-4.275-5.648-8.6-11.423-13.129-17.47-9.354-12.491-19.958-26.648-32.375-42.632a37.807,37.807,0,1,0-59.709,46.392c12.007,15.455,21.949,28.728,31.563,41.565,13.841,18.482,26.915,35.938,42.45,54.771a37.806,37.806,0,0,0,28.682,13.745c.162,0,.321,0,.482,0a37.809,37.809,0,0,0,28.541-13.012c29.482-33.939,58.2-62.952,88.329-88.826Z'
            transform='translate(18 233)'
            fill={isChecked ? color : 'none'}
          />
        </g>
      </g>
    </svg>
  )
}

export { Icon, CloseIcon, MinimizeIcon, RestoreIcon, CheckIcon }
