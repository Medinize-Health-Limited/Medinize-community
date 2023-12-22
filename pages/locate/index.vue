<template>
    <div class="md:flex md:flex-row md:justify-between md:items-center md:space-x-6">
        <main class="md:w-5/12">
            <nuxt-link to="/dashboard/services" class="mt-3 mb-6">
                <button class="text-white bg-gray-600 rounded-full font-medium text-xs px-3 py-2.5 mt-3 mb-6">
                    Go Back
                </button>
            </nuxt-link>

            <div class="bg-white rounded-md p-6 lg:p-10">
                <div class="relative">
                    <input
                        value="facility"
                        v-model="coordinates" 
                        type="text"
                        placeholder="Enter facility name..."
                        class="py-3 pl-3 border-[0.9px] bg-gray-50 outline-none rounded-md shadow-sm w-full"
                    >
                    <img class="absolute right-[1rem] top-[1.3rem] cursor-pointer" @click="handleInput" src="@/assets/img/search.png"/>
                    {{ lat }}, {{ lng }}
                </div>
            
                <p class="mt-10 text-gray-500 text-[1rem]">Not sure? Select a facility and proximity, let's help you locate the closest facility to you.</p>

                <div class="facility-radius flex flex-row justify-between items-center space-x-3">
                    <div class="facility w-full">
                        <select class="w-[100%] py-3 px-3 border-[0.9px] bg-gray-50 outline-none rounded-md shadow-sm" v-model="type">
                            <option class="" value="">Select facility</option>
                            <option class="" value="hospital">Hospital</option>
                            <option class="" value="pharmacy">Pharmacy</option>
                            <option class="" value="clinic">Clinic</option>
                            <option class="" value="laboratory">Laboratory</option>
                        </select>
                    </div>

                    <div class="radius w-full">
                        <select class="w-[100%] py-3 px-3 border-[0.9px] bg-gray-50 outline-none rounded-md shadow-sm" v-model="radius">
                            <option value="">Select radius</option>
                            <option value="5">5 KM</option>
                            <option value="10">10 KM</option>
                            <option value="15">15 KM</option>
                            <option value="20">20 KM</option>
                        </select>
                    </div>
                </div>
                <button class="bg-[#086406] text-white py-[.8em] px-3 mt-4 rounded w-full" @click="findCloseFacility">Search</button>

                <!-- loop through the places array -->
                <div class="" style="max-height: 500px; overflow: scroll;">
                    <div class="item" v-for="place in places" :key="place.id">
                        <div class="content">
                            <div class="header">{{ place.name }}</div>
                            <div class="meta">{{ place.vicinity}}</div>
                        </div>
                    </div>
                </div>  
            </div>
        </main>


        <div class="md:w-7/12 border md:mt-0 mt-6 h-[280px]" ref="map">
            <!-- <p class="text-center">Map shows here</p> -->

        </div>
    </div>
    
</template>

<script>

export default {

    data() {
        return {
            type: "",
            radius: "",
            lat: 0,
            lng: 0,
            places: [],
            facility: ''
        };
    },
    computed: {
        // coordinates() {
        //     return `${this.address}`
        // }
    },
    methods: {
        handleInput() {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;
                    console.log(this.lat, this.lng)
                },
                error => {
                    console.log("Error getting location")
                }
            )
        },




        // find closest facility
        findCloseFacility() {
            const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=
                ${this.lat}, 
                ${this.lng}
                $type=${this.type}
                &radius=${this.radius * 
                1000}&key=[APIKEY]}`;

                console.log(this.lat, this.lng)

            axios
                .get(URL)
                .then(response => {
                    console.log(response.data)
                    this.places = response.data.results;
                })
                .catch(error => {
                    console.log(error.message)
                });
        },

        
        // add map
        addLocationsToGoogleMaps() {
            var map = new google.maps.Map(this.$refs["map"], {
                zoom: 15,
                center: new google.maps.LatLng(this.lat, this.lng),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            // this shows up when a marker is clicked
            var infoWindow = new google.maps.infoWindow();

            //once map is created, loop through the places array to get the lat and lng values of a place on each iteration
            this.places.forEach(place => {
                const lat = place.geometry.location.lat;
                const lng = place.geometry.location.lng;

                // then create an instance on marker object that takes in two properties
                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, lng),
                    map: map
                });

                // this gives the info on a clicked marker
                google.maps.event.addListener(marker, 'click', () => {
                    infoWindow.setContent(
                        `<div class="header">${place.name}</div><p>${place.vicinity}</p>`
                    );

                    infoWindow.open(map, marker);
                });
            })
        }
    },
}
</script>

<style></style>
