$(document).ready(
    function(){
        $('.datepicker').datepicker({
            format: 'yyyy-mm-dd'

        });

        $('.calculate-age').click(function(e){

        
            var result ="";

            var b = moment($('#fromDate').val(), 'YYYY-MM-DD');
            var  a = moment($('#toDate').val(), 'YYYY-MM-DD');

            console.log(a);
            
            var intervals = ['years','months','days'], out = [];

            for(var i=0; i<intervals.length; i++){
                var diff = a.diff(b, intervals[i]);
                b.add(diff, intervals[i]);
                out.push(diff + ' ' + intervals[i]);
            }
            result = out.join(', ');

            console.log(result);

            $('#result').html(result).addClass('glow animated bounce');

            return false;
        });



    }
);