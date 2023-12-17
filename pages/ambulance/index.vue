<template>
    <div class="md:flex md:flex-row md:justify-between md:space-x-6 py-3">
        <main class="md:w-5/12">
            <nuxt-link to="/services" class="mb-6">
                <button class="text-white bg-gray-600 rounded-full font-medium text-xs px-3 py-2.5 mb-6">
                    Go Back
                </button>
            </nuxt-link>


            <div class="bg-white rounded-md p-6 lg:p-10 space-y-6">
                <div class="space-y-3">
                    <label class="text-gray-700 text-sm font-medium">Full name</label>
                    <div class="w-full">
                        <input
                        type="text"
                        class="py-3 pl-3 border-[0.9px] bg-gray-50 outline-none rounded-md shadow-sm w-full"
                        >
                    </div>
                </div>

                <div class="space-y-3">
                    <label class="text-gray-700 text-sm font-medium">Contact number</label>
                    <div class="w-full">
                        <input
                        type="telephone"
                        class="py-3 pl-3 border-[0.9px] bg-gray-50 outline-none rounded-md shadow-sm w-full"
                        >
                    </div>
                </div>

                <div class="space-y-3">
                    <label class="text-gray-700 text-sm font-medium">Contact address</label>
                    <div>
                        <textarea
                            rows="6"
                            cols="20"
                            class="py-3 pl-3 border-[0.9px] bg-gray-50 resize-none outline-none rounded-md shadow-sm w-full"
                        />
                    </div>
                </div>

                <div class="space-y-3 w-full">
                    <label class="text-gray-700 text-sm font-medium">Nature of emergency</label>
                        <div>
                            <select class="py-3 px-3 border-[0.9px] bg-gray-50 outline-none rounded-md shadow-sm w-full">
                                <option value="">
                                    Select nature of emergency
                                </option>
                                <option value="bleeding">
                                    Bleeding
                                </option>
                                <option value="breathing difficulties">
                                    Breathing difficulties
                                </option>
                                <option value="collapse">
                                    Collapse
                                </option>
                                <option value="fit and/or epileptic seizure">
                                    Fit and/or epileptic seizure
                                </option>
                                <option value="severe pain">
                                    Severe pain
                                </option>
                                <option value="heart attack">
                                    Heart attack
                                </option>
                                <option value="stroke">
                                    Stroke
                                </option>
                                <option value="labour">
                                    Labour
                                </option>
                                <option value="other">
                                    Other
                                </option>
                            </select>
                        </div>
                </div>

                <div class="space-y-3">
                    <label class="text-gray-700 text-sm font-medium">Action taken</label>
                    <div>
                        <textarea
                            rows="6"
                            cols="20"
                            class="py-3 pl-3 border-[0.9px] bg-gray-50 resize-none outline-none rounded-md shadow-sm w-full"
                        />
                    </div>
                </div>


                <button class="bg-[#086406] text-white py-[.8em] px-3 mt-4 rounded w-full">Book ambulance</button>
            </div>
            
            
        </main>
        <div class="md:w-7/12 border md:mt-6 mt-6 space-y-6">
            <div>
                <h2 class="text-center">First Aid Tips</h2>
            </div>
            <div v-for="(treatment, id) in treatments" :key="id" class="">
                <div class="flex flex-row justify-between items-center">
                    <h6>{{ treatment.title }}</h6>
                    <div class='controls cursor-pointer'>
                        <img class="plus h-3 w-3" src="@/assets/img/plus.png"  />
                        <img class="minus h-3 w-3" src="@/assets/img/minus.png"  />
                    </div>
                    
                </div>
                <div class="mb-3">
                    <span class="font-medium">Step one: </span>
                    <span class="">{{ treatment.urgent }}</span>
                </div>
                <p class="leading-7">{{ treatment.description }}</p>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            treatments: [
                {
                    title: 'CPR',
                    urgent:'Phone/Request for an ambulance immediately',
                    description: 'If an adult is unconscious and not breathing, make sure they are flat on their back and then place the heel of one hand in the centre of their chest and your other hand on top. Press down firmly and smoothly (compressing to one third of their chest depth) 30 times. Give two breaths. To get the breath in, tilt their head back gently by lifting their chin. Pinch their nostrils closed, place your open mouth firmly over their open mouth and blow firmly into their mouth. Keep going with the 30 compressions and two breaths at the speed of approximately five repeats in two minutes until you hand over to the ambulance officers or another trained person, or until the person you are resuscitating responds. The method for CPR for children under eight and babies is very similar and you can learn these skills in a CPR course'
                },
                {
                    title: 'Asthma',
                    urgent:'Phone/Request for an ambulance immediately',
                    description: 'Sit the person upright. Give 4 separate puffs of blue/grey reliever puffer. Shake puffer. Put 1 puff into spacer. Take 4 breaths from spacer. Repeat until 4 puffs have been taken. Remember: shake, 1 puff, 4 breaths OR give 2 separate doses of a Bricanyl inhaler (age 6 & over) or a Symbicort inhaler (over 12)'
                },
                {
                    title: 'Severe allergic reactions',
                    urgent:'Phone/Request for an ambulance immediately',
                    description: 'Lay the person flat - do not allow them to stand or walk. Give adrenaline injector (such as EpiPen® or Anapen®) into the outer mid-thigh. Phone family or emergency contact. Further adrenaline may be given if there is no response after 5 minutes. Transfer person to hospital for at least 4 hours of observation. If in doubt, give adrenaline injector. Commence CPR (cardiopulmonary resuscitation) at any time if person is unresponsive and not breathing normally. Always give adrenaline injector first, and then asthma reliever puffer if someone with known asthma and allergy to food, insects or medication has sudden breathing difficulty (including wheeze, persistent cough or hoarse voice) even if there are no skin symptoms.'
                },
                {
                    title: 'Heimlich maneuver - for a choking person',
                    urgent:'Phone/Request for an ambulance immediately',
                    description: 'Stand behind the person, and put your arms around their abdomen. Make a fist with one hand, and clasp your other hand tightly around it. Place the thumb side of your fist just below their ribcage and about two inches above their belly button (navel). Sharply and quickly thrust your hands inward and upward five times. Repeat this process until the object is freed (dislodged) or the person becomes unconscious. If the person becomes unconscious, start CPR.'
                },
                {
                    title: 'Severe bleeding',
                    urgent:'Phone/Request for an ambulance immediately',
                    description: 'First aid for severe external bleeding includes direct pressure on the wound maintained by using pads and bandages, and raising the injured area above the level of the heart if possible. First aid for internal bleeding includes laying the person down, raising their legs above the level of their heart and not giving them anything to eat or drink.'
                },
            ]
        };
    },
    computed: {
        
    },
    methods: {
        
    }
}
</script>

<style scoped>
    .controls {
        position: relative;
        /* border: 1px red solid; */
    }

    .plus {
        position: relative;
        /* z-index: 1; */
        /* opacity: 0; */
        border: 1px blue solid;
    }

    .minus {
        position: absolute;
        top: -.1rem;
        opacity: 0;
        border: 1px red solid;
    }

    
</style>