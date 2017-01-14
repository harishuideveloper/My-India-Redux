import React from 'react'
import { connect } from 'react-redux';
import config from '../../../../config/api.config.js';
import { requestData } from '../modules/crimeInStates';
import CrimeInStates from '../components/CrimeInStates'

const mapDispatchToProps = {
  requestData : () => requestData(config.crimeInStates)
}


const mapStateToProps = (state) => ({
  crimeInStates : state.crimeInStates
})


export default connect(mapStateToProps, mapDispatchToProps)(CrimeInStates)
