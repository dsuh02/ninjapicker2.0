$(document).ready(function () {
    $('#submit').on('click', function(){
        
        /*
            show the output ID
            reset #winnerOutput so it doesn't keep adding
        */
        $('#output').show();
        $('#winnerOutput').html('');
        
        // read input data, trim the ends, and split into arrays by new line
        let initList = $('#winnersList').val().trim().split('\n');
        let list = []; // initialize list array
        
        // get rid of Blank Spaces and push to list[] array
        $(initList).each(function(i, item){
           (item == '') ? '' : list.push(item);
        });
        
        // pick random array index based on list.length i number of times
        for(let i = 0; i < $('#winnerQty').val(); i++){
            let index = Math.floor(Math.random() * (list.length));
            let winner = list[index];
            list.splice(index, 1);
            $('#winnerOutput').append($('<li>').append(winner));
        }
    });
});