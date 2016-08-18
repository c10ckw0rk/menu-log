//---------------------------------------
//** Desc: Base Component with utility
//** functions
//** Contributors: Daniel Peterson
//** Created by Dax on 13/03/16.
//---------------------------------------

import React from 'react';

class Base extends React.Component {

	constructor() {
		super();
		this.inputUpdate = this.inputUpdate.bind(this);
		this.inputPushVal = this.inputPushVal.bind(this);
		this.getElement = this.getElement.bind(this);
		this.domNodes = {};
	}

	getElement(ref) {

		if (ref) this.domNodes[ref.id] = ref;
	}

	inputUpdate(event) {
		const newState = {};
		newState[event.target.name] = event.target.value;
		this.setState(newState);
	}

	inputPushVal(name, val) {
		const newState = {};
		newState[name] = val;
		this.setState(newState);
	}

	addClasses(stat, dynamic) {

		let clses = '';
		const addClass = (cls) => {

			const key = Object.keys(cls)[0];

			if (typeof(cls[key]) === 'function') {
				if (cls[key]()) clses += ' ' + key;
			} else if (typeof(cls[key]) === 'boolean') {
				if (cls[key]) clses += ' ' + key;
			}

		};

		if (Array.isArray(dynamic)) {
			dynamic.forEach(addClass);
		} else {
			addClass(dynamic);
		}


		return stat + clses;
	}

	set binder(funcs) {
		if (funcs instanceof Array) {
			this.funcs = funcs;

			for (let i = 0, len = this.funcs.length; i < len; i++) {

				if (typeof(this[funcs[i]]) === 'undefined') throw new Error('' + funcs[i] + ' is not a function. Check ' + this.constructor.name + ' constructors binder');

				this[funcs[i]] = this[funcs[i]].bind(this);

			}

		} else {
			console.error('An array was not passed to binder');
		}
	}

	get binder() {

		if (this.funcs) {
			return this.funcs;
		}

		return 'Functions not set';

	}

}

export default Base;


