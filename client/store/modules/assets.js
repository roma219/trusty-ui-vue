import * as types from '../mutations';
import * as actions from '../actions/assets';
import * as getters from '../getters/assets';

let state = {
	assets: null,
	pending: false
}

let composeAssets = (assets) => {
	let composedAssets = {};
	assets.forEach((asset)=>{
		composedAssets[asset.id] = asset;
	});	
	return composedAssets;
}

let mutations = {
	[types.GET_ASSETS_REQUEST] (state){
		state.pending = true;
	},
	[types.GET_ASSETS_COMPLETE] (state,assets){
		state.assets = composeAssets(assets);
	},
	[types.GET_ASSETS_ERROR] (state){
		state.pending = false;
	},
	[types.GET_DEFAULT_ASSETS_REQUEST] (state){
		state.pending = true;
	},
	[types.GET_DEFAULT_ASSETS_COMPLETE] (state,assets){
		state.assets = composeAssets(assets);
	},
	[types.GET_DEFAULT_ASSETS_ERROR] (state){
		state.pending = false;
	},


}

export default {
  state,
  actions,
  mutations,
  getters
}