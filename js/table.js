$(function() {

///////////// Market Report Table ////////

	function Property(street, city, state, price, posted) {  // to create a new instance of Property

		this.constructor.all.push(this);

		this.street = street;
		this.city = city;
		this.state = state;
		this.price = price;
		this.posted = new Date(posted);

		var self = this;

		function isNew() {  //only accessable inside this class 
			var currentDate = new Date(),
			    daysListed = (currentDate - self.posted)/(1000*60*60*24);
			if (daysListed < Property.maxDays) {
				return '<span class="new">&#9733;</span> ';
			} else {
				return '';
			}
		}

		this.el = '<tr>'+
					'<td>'+isNew()+this.street+'</td>'+  //isNew is a method
					'<td>'+this.city+'</td>'+
					'<td>'+this.state+'</td>'+
					'<td>'+this.price+'</td>'
				  '</tr>';	

	}

	Property.all = [];
	Property.maxDays = 10;

	Property.displayContent = function() {
		$('.property-count').text(Property.all.length);
		$('.max-days').text(Property.maxDays);
		$.each(Property.all, function(i, property) {
			$('table').find('tbody').append(property.el);
		});
		$('table').stupidtable(); //jQuery stupid table plugin
	};

	// create properties

	var property1 = new Property("2345 Fairview Lane", "Brooklyn", "NY", 1200000, "2014 Apr 3");
	var property2 = new Property("974 Clapton Street", "Queens", "NY", 998000, "2015 Mar 14");
	var property3 = new Property("14A Belmont Way", "Bronx", "NY", 874000, "2015 Mar 28");
	var property4 = new Property("1 Crazy Lane", "Bronx", "NY", 874000, "2010 Mar 28");
	
	// console.log(Property.all);

	Property.displayContent();


});