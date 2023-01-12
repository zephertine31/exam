import React from 'react'

import './Team.css'

const Team = ({ team, id }) => {

  return (
    <div>
      {
        team && <h4 className='mt-0 mb-6' >{ team.name }</h4>
      }
      {
        team &&
        <div className='layout-row justify-content-end mb-6'>
          <input 
            placeholder='Enter Channel Name'
            className="channel-name-input w-45 px-13"
            data-testid={ 'channel-name-input-' + id }
          />
          <button 
            className='channel-name-btn x-small w-35 h-30 pa-6 ma-0 ml-6'
            data-testid={ 'add-channel-btn-' + id }
          >
            Add Channel
          </button>
        </div>
      }
      {
        team &&
        <ul className='styled mb-20 pl-25' data-testid={ 'channel-list-' + id }>
          { team.channels && team.channels.map((channel) => (
            <li 
              key={ channel.id } 
              className='flex slide-up-fade-in justify-content-between align-items-center pl-10 pr-5 py-6 mt-0 mb-6'
            >
              <span>{ channel.name }</span>
              <button 
                data-testid={ 'remove-channel-button-' + id + channel.id }
                className='icon-only x-small danger ma-0 pa-0'
              >
                <i className="material-icons">delete</i>
              </button>
            </li>
          ))}
        </ul>
      }  
    </div>
    
  )
}

export default Team
