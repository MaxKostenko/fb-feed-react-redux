export default class DayLeft {

	constructor( from = false, to = false ) {
		if( from ) {
			this.from = from;
			if( to ) {
				this.to = to;
			}
		}
	}
	
	setFrom( date ) {
		this.from = date;
		return this;
	}
	
	set from( date ) {
		const fromDate = new Date(date);
		if( fromDate )
			this[Symbol.for('from')] = fromDate;
		else
			throw new Error(null, "Bad date format"); 
	}
	
	get from() {
		return this[Symbol.for('from')] ? this[Symbol.for('from')] : new Date();
	}
	
	setTo( date ) {
		this.to = date;
		return this;
	}
	
	set to( date ) {
		const toDate = new Date(date);
		if( toDate )
			this[Symbol.for('to')] = toDate;
		else
			throw new Error(null, "Bad date format"); 
	}
	
	get to() {
		return this[Symbol.for('to')] ? this[Symbol.for('to')] : new Date();
	}

	days() {
		const from = new Date( this.from );
		const to = new Date( this.to );
		from.setHours(0, 0, 0, 0);
		to.setHours(0, 0, 0, 0);
		const currentYear = from.getFullYear();
		to.setFullYear(currentYear);
		if( +to === +from )
			return 0;
		if( +to < +from )
			to.setFullYear(currentYear + 1);
		return Math.round(( to - from )/86400000);
	}

}