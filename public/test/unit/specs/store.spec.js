import Vue from 'vue'

import serviceList from '@/components/service-list'

describe('ServiceList.vue', () => {

  it('Should return Sort with Names', ()=>{
    const Constructor = Vue.extend(serviceList);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.sort-btn button').textContent)
  .to.equal('Sort With Name')
  });
});
