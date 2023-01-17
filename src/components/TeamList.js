import React, { useState } from 'react'
import Team from './Team'

import './TeamList.css'

const TeamList = () => {
  const [teamName, setTeamName] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [teamList, setTeamList] = useState([]);
  const [channelCount, setChannelCoun] = useState(0);

  const checkTeamName = (event) => {
    let newTeamName = event.target.value;
    let response;

    response = teamList.find(team => {
      if(team.name === newTeamName) return true;
    });

    response = response ? true:false;

    setIsBtnDisabled(response);
  }

  const addNewTeam = (e) => {
    e.preventDefault();
    let object = {
      name:teamName,
      channels:[]
    }
    
    setTeamList([...teamList, object]);
    setTeamName('');
    setIsBtnDisabled(true);
  }

  const onChangeTeamName = (event) => {
    setTeamName(event.target.value);
  }

  const addNewChannel = (teamKey, channelDetails, setChannelAdd) => {
    let team = [...teamList];
    let channel = team[teamKey].channels;
    channel.push(channelDetails)
    team[teamKey].channel = channel;
    
    setTeamList(team);
    setChannelCoun(channelCount+1)
  }

  const removeChannel = (teamKey, channelId) => {
    console.log({channelId});
    let team = [...teamList];
    let channels = team[teamKey].channels;
    let newChannel;

    if (channels && channels.length > 0) {
      newChannel = channels.filter((chan) => chan.id !== channelId) 
    }
    
    team[teamKey].channels = newChannel;
    
    setTeamList(team);
  }

  return (
    <div className='w-50 mx-auto'>
      <div className='card w-35 mt-50 mx-auto px-10 py-15'>
        <div className='layout-column' data-testid='team-list'>  
            { teamList.map((team, id) => {
              return (
                <Team
                  key={ id } 
                  id={ id }
                  team={ team } 
                  addNewChannel={addNewChannel}
                  removeChannel={removeChannel}
                  channelCount={channelCount}
                />
              )
            })
          }
        </div>
        <div className='layout-row'>
          <input 
            value={teamName}
            placeholder='Enter Team Name'
            className='team-list-input w-75'
            data-testid='team-name-input'
            onChange={onChangeTeamName}
            onKeyPress={checkTeamName}
            onKeyUp={checkTeamName}
          />
          <button 
            className='team-list-btn x-small w-35 h-30 pa-6 ma-0 ml-6'
            data-testid='add-team-btn'
            onClick={addNewTeam}
            disabled={isBtnDisabled}
          >
            Add Team
          </button>
        </div> 
      </div>
    </div>
  )
}

export default TeamList
