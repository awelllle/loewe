(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=97)})({97:function(){'use strict';$(function(){function a(){var a=$('.owl-carousel').find('.center'),b=a.find('.item'),c=b.data('path');m.html(''),m.addClass('loading'),axios.get('/'+n+'/faq-list',{params:{path:c}}).then(function(a){m.removeClass('loading'),m.html(a.data),$generalNotificationsContainer.hide()}).catch(function(){w.html(D.error.general),$generalNotificationsContainer.show()})}function b(a,b){a.modal('show'),$.ajax({url:b,success:function(b){a.find('.modal-body').html(b)}})}function c(a){y.html('');for(var b=0;b<E.length;b++)E[b].language==a&&y.append(e(E[b]))}function d(){x.html('');for(var a=0;a<E.length;a++)E[a].language!=o&&x.append(e(E[a]))}function e(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'',c=a.url.split('/').pop(),d='<a href="'+a.url+'" target="_blank"';return''!=b&&(d+=' class="'+b+'"'),d+='>'+c+'</a></br>',d}var f=$('#selectContainerManuals'),g=$('#selectContainerSoftware'),h=$('#downloadButtonSoftware'),i=$('#downloadButtonManual'),j=$('#licenceModal'),k=$('#apiAgreementModal'),l=$('#controlInterfaceModal'),m=$('#faqContainer'),n=$('html').data('prefix'),o=$('html').attr('lang'),p=$('.owl-carousel'),q=$('input#productId'),r=$('button#manualsByProductIdBtn'),s=$('#errNotificationSoftware'),t=$('#errNotificationManuals'),u=$('#errorOutputManuals'),v=$('#errorOutputSoftware'),w=$('#errorOutput'),x=$('#manualsByProductIdOutput'),y=$('#manualByProductIdOutput'),z=$('#showAllManuals'),A=$('#softwareByProductIdOutput'),B=$('#softwareDownloads'),C=$('#manualsDownloads');'dk'==o?o='da':'se'==o&&(o='sv');var D=php,E=[];p.on('initialized.owl.carousel',function(){$('.owl-carousel').find('.item').each(function(){return a(),!1})}),p.owlCarousel({margin:10,nav:!1,center:!0,responsive:{0:{items:1},600:{items:2},1200:{items:3}}}),p.on('changed.owl.carousel',function(){setTimeout(function(){a()},100)}),$('#nextSubcategory').on('click',function(){return p.trigger('next.owl.carousel'),!1}),$('#prevSubcategory').on('click',function(){return p.trigger('prev.owl.carousel'),!1}),$(document).on('click','.owl-item>div',function(){return p.trigger('to.owl.carousel',$(this).data('position')),!1}),$('div#download').on('change','select.path',function(){$(this).nextAll().remove();var a=$(this).data('root'),b=this.value,c=$.trim($(this).find('option:selected').text()),d=b;c!=b&&(d+='/'+c),axios.get('/'+n+'/faq-files/select',{params:{path:d,root:a}}).then(function(b){b.data.startsWith('http')?'manuals'==a?(i.attr('href',b.data),i.show()):'software'==a&&($('#downloadSoftwareLink').attr('href',b.data),h.show()):'manuals'==a?(i.hide(),f.append(b.data)):'software'==a&&(h.hide(),g.append(b.data))}).catch(function(a){console.log(a)})}),i.on('click',function(a){$(this).attr('href').split('/').pop().startsWith('remote_api')&&(a.preventDefault(),$('#downloadManualLink').attr('href',$(this).attr('href')),b(k,'/'+n+'/modal/api-agreement?noCss=1')),$(this).attr('href').split('/').pop().startsWith('control_interface')&&(a.preventDefault(),$('#downloadManualLink').attr('href',$(this).attr('href')),b(k,'/'+n+'/modal/control-interface?noCss=1'))}),h.on('click',function(a){a.preventDefault(),b(j,$(this).attr('href'))}),$('#downloadProductId').delegate('a.softwareDownload','click',function(a){a.preventDefault(),$('#downloadSoftwareLink').attr('href',$(this).attr('href')),b(j,'/gnu/lizenzbestimmungen.html?noCss=1')}),r.on('click',function(a){var b=this;a.preventDefault();var d=q.val();if(d=d.replace(/[^\d\w]/gi,''),s.hide(),t.hide(),z.hide(),$(this).hasClass('disabled'))return!1;if($(this).addClass('running disabled'),8!=d.length)return C.hide(),B.hide(),q.parent().addClass('error'),$(this).removeClass('running disabled'),!1;var f='/manuals/'+d;axios.post(f).catch(function(){C.show(),y.html(''),x.html(''),t.show(),u.html(D.error.general),$(b).removeClass('running disabled')}).then(function(a){C.show(),E=a.data.manuals,y.html(''),x.html(''),0==E.length?(t.show(),u.html(D.error.general)):(t.hide(),z.show(),c(o)),$(b).removeClass('running disabled')}),f='/software/'+d,axios.get(f).then(function(a){console.log(a,'response'),B.show(),A.html(''),a.data.software?A.append(e(a.data.software,'softwareDownload')):(s.show(),v.html(D.error.notFound)),$(b).removeClass('running disabled')}).catch(function(){A.html(''),B.show(),s.show(),v.html(D.error.notFound),$(this).removeClass('running disabled')})}),z.on('click',function(a){a.preventDefault(),d(),$(this).hide()})})}});