"use strict";
import base from "/lib/base.js";

export default class view extends base
{
	constructor(){
		super();
	}
	removeChildren(node){
		while(node.lastChild) node.removeChild(node.lastChild);
	}
}
