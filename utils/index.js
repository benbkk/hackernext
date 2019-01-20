import moment from 'moment'

export const slugify = (myText) => (
    myText.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '')             // Trim - from end of text
)

export const getDate = (timeStamp) => {
    let postDate
    if (timeStamp) {
        postDate = new Date(timeStamp)
        postDate = moment.unix(timeStamp).format('dddd, LL')
        return postDate
    }
}

export const smoothScroll = ({
	timer: null,
	stop: () => {
		clearTimeout(this.timer);
	},

	scrollTo: (id, callback) => {
		let settings = {
			duration: 1000,
			easing: {
				outQuint: (x, t, b, c, d) => {
					return c*((t=t/d-1)*t*t*t*t + 1) + b;
				}
			}
		};
		let percentage;
		let startTime;
		let node = document.getElementById('__next');
		let nodeTop = node.offsetTop;
		let nodeHeight = node.offsetHeight;
		let body = document.body;
		let html = document.documentElement;
	    let height = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);
		let windowHeight = window.innerHeight
		let offset = window.pageYOffset;
		let delta = nodeTop - offset;
		let bottomScrollableY = height - windowHeight;
		let targetY = (bottomScrollableY < delta) ?
			bottomScrollableY - (height - nodeTop - nodeHeight + offset):
			delta;

		startTime = Date.now();
		percentage = 0;

		if (this.timer) {
			clearInterval(this.timer);
		}

		const step = () => {
			let yScroll;
			let elapsed = Date.now() - startTime;

			if (elapsed > settings.duration) {
				clearTimeout(this.timer);
			}

			percentage = elapsed / settings.duration;

			if (percentage > 1) {
				clearTimeout(this.timer);

				if (callback) {
					callback();
				}
			} else {
				yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
				window.scrollTo(0, yScroll);
				this.timer = setTimeout(step, 10);     
			}
		}

		this.timer = setTimeout(step, 10);
	}
});