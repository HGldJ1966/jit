function init(){
  //init data
  var json = {
      'label': ['label A', 'label B', 'label C', 'label D'],
      'values': [
      {
        'label': 'date A',
        'values': [20, 40, 15, 5]
      }, 
      {
        'label': 'date B',
        'values': [30, 10, 45, 10]
      }, 
      {
        'label': 'date E',
        'values': [38, 20, 35, 17]
      }, 
      {
        'label': 'date F',
        'values': [58, 10, 35, 32]
      }, 
      {
        'label': 'date D',
        'values': [55, 60, 34, 38]
      }, 
      {
        'label': 'date C',
        'values': [26, 40, 25, 40]
      }],
      
  };
  var json2 = {
      'values': [
      {
        'label': 'date A',
        'values': [10, 40, 15, 7]
      }, 
      {
        'label': 'date B',
        'values': [30, 40, 45, 9]
      }, 
      {
        'label': 'date D',
        'values': [55, 30, 34, 26]
      }, 
      {
        'label': 'date C',
        'values': [26, 40, 85, 28]
      }],
      
  };
  //end

    var infovis = document.getElementById('infovis');
    var w = infovis.offsetWidth - 50, h = infovis.offsetHeight - 50;
    
    //init ForceDirected
    var bc = new $jit.BarChart({
        'injectInto': 'infovis',
        'animate': true,
        'orientation': 'horizontal',
        barsOffset: 5,
        type:'stacked:gradient',
        Tips: {
          'enable': true,
          'onShow': function(tip, elem) {
             tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;
          }
        }
    });
    
    //load JSON data.
    bc.loadJSON(json);
    
    setTimeout(function() {
      bc.updateJSON(json2);
    }, 3000);
}