"use strict";
import * as C from "/etc/const.js";
import appView from "/lib/app/appView.js";
import commentModel from "/lib/comment/commentModel.js";
export default class commentView extends appView
{
	constructor(){
		super();
	}
	init(){}
	setCommentModel(obj){
		this.commentModel = obj;
	}
	getCommentModel(){
		return this.commentModel;
	}
	setWindow(w){
		this.window = w;
	}
	getWindow(){
		return this.window;
	}
	openWindow(url){
		let win = this.getWindow();
		console.log(win);
		if( !win ){
			let p = browser.windows.create({
				"url": C.TWITTER_URL+url,
				"type": "popup"
			});
			return p.then( this.onOpenWindow.bind(this) );
		}
		/*
		let p = browser.tabs.update({
			win.id,
			"url": C.TWITTER_URL+url
		});
		return p.then( this.onUpdateWindow.bind(this) );
		*/
	}
	onOpenWindow(win){
		console.log(win);
		this.setWindow(win);
	}
	onUpdateWindow(win){
		console.log(win);
		this.setWindow(win);
	}
	removeWindow(id){
		console.log(id);
		let win = this.getWindow();
		if(!win) return;
		console.log(win.id);
		if( win.id == id ){
			console.log("Set window undefined.");
			this.setWindow();
		}
	}
}
/*
		this.body = document.querySelector("body");
		this.tabSelector = document.querySelector("#tabSelector");
		this.applyI18n([
			{ "selector": ".commentPaneName", "key": "commentPaneName", "property": "innerText" },
			{ "selector": "#updateButton", "key": "updateButton", "property": "innerText" },
			{ "selector": "#endOfUpdateTimeLabel", "key": "endOfUpdateTimeLabel", "property": "innerText" }
		]);
		Promise.resolve().then(
			this.makeTabSelector.bind(this)
		).then(()=>{
			this.tabSelector.addEventListener("change", this.changedTabSelector);
		}).then(
			this.showBody.bind(this)
		).then(
			this.loadCurrentWindowTabComment.bind(this)
		);
	}
	showBody(){
		this.show(this.body);
	}
	makeTabSelector(){
		this.removeChildren(this.tabSelector);
		return this.commentModel.eachCurrentWindowTabs((tab,index,list)=>{
			this.tabSelector.appendChild(this.makeTabSelectorOption(tab));
		});
	}
	makeTabSelectorOption(tab){
		let option = document.createElement("option");
		option.innerText = tab.title||tab.url;
		option.value = tab.id;
		option.selected = tab.active;
		return option;
	}
	changedTabSelector(e){
		console.log(e);
	}
	activateTab(tabId){
		this.selectTabSelectorOption(tabId)
		console.log("update comment too.");
	}
	selectTabSelectorOption(tabId){
		let list = this.tabSelector.querySelectorAll("option");
		this.each(list,(node)=>{
			if( node.value == tabId ){
				node.selected = true;
			}
			else {
				node.selected = false;
			}
		});
	}
	removeTab(tabId){
		this.removeTabSelectorOption(tabId)
		console.log("remove comment cache? too.");
	}
	removeTabSelectorOption(tabId){
		let list = this.tabSelector.querySelectorAll("option[value=\""+tabId+"\"]");
		this.each(list,(node)=>{
			node.remove();
		});
	}
	loadCurrentWindowTabComment(){
		return this.commentModel.loadCurrentWindowTabComment().then(
			(list)=>{
				console.log(list);
				return this.commentModel.each(list, (obj,index,list)=>{
					console.log(obj);
				});
			}
		);
	}
}
*/
