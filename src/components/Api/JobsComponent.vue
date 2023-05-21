<template>
    <div>
        <h2 class="bg-green-600 text-white block relative text-center py-4 px-2 text-sm">Getting all Jobs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-4">
            <div v-for="job in jobs" :key="job.JobsRef" class="p-3 shadow-md border border-gray-200 rounded-md hover:shadow-xl duration-200 hover:duration-200 hover:border-green-600">
                <section class="font-semibold flex flex-col gap-3">

                    <div class="flex align-middle justify-between gap-3 items-center">
                        <!-- Company Logo -->
                        <img :src="job.company.logo" style="height: 60px; width: 60px;" :alt="job.company.name" class="h-22 w-22 rounded-full">
                        <div aria-label="title" class="flex flex-col gap-2">
                            <span class="w-full block truncate overflow-hidden ">{{ job.company.name }}</span>
                            <a :href="'https://jobscarriers.com/companies/'+ job.company.companiesRef + '/show'" class="underline text-blue-600 text-sm">Visit Company</a>
                        </div>
                        
                    </div>
                    <div aria-label="title" class="flex flex-col gap-2">
                        <span>Title: {{ job.title }}</span>

                        <span class="block">Location: {{ job.location }}</span>
                        <span class="block">Country: {{ job.country }}</span>
                        <span class="text-xs block"><a :href="job.applicationUrl" class="text-xs text-white bg-blue-500 border border-blue-400 rounded-lg hover:bg-white duration-300 py-2 px-4 block text-center hover:duration-300 hover:text-blue-600 hover:shadow-md">Apply</a></span>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'JobsComponent',
    data() {
        return {
            jobs: {}
        }
    },
    async mounted() {
        let result = await axios.get("https://test.jobscarriers.com/api/v1/jobs");
        this.jobs = result.data.data;
    }
}
</script>