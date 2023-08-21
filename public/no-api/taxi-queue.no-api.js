document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'no-api-1.0',
			taxiQueue:[],

			joinsCount: 0,
			joinQueue() {
			
				this.joinsCount++;
			},
			leaveQueue() {
				if (this.joinsCount > 0) {
					this.joinsCount--;
				}
				

			},

			taxiJoinsCount: 0,
			joinTaxiQueue() {
				this.taxiJoinsCount++;

			},

			taxiDepartCount: 0,
			taxiDepart() {
				if (this.joinsCount >= 12 > 0){
					this.taxiDepartCount++;
				}
			},

			queueLength() {
				

			},

			taxiQueueLength() {

			},

			
		}

	});

});