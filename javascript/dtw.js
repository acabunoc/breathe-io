(function(window, document, undefined){
    var inputs = {
            ax: [],
            ay: [],
            az: [],
            gx: [],
            gy: [],
            gz: [],
        },
        training = {
            // comparison data array
            ax: [-0.564453125,-0.562988281,-0.559082031,-0.561035156,-0.555664063,-0.556640625,-0.548828125,-0.5390625,-0.542480469,-0.551757813,-0.557617188,-0.564941406,-0.575195313,-0.583007813,-0.568359375,-0.563964844,-0.570800781,-0.55859375,-0.544433594,-0.533691406,-0.530761719,-0.516113281,-0.509765625,-0.505859375,-0.496582031,-0.475585938,-0.397460938,-0.299804688,-0.214355469,-0.154296875,-0.138183594,-0.117675781,-0.164550781,-0.21484375,-0.245117188,-0.251953125,-0.271484375,-0.276855469,-0.25,-0.247070313,-0.237304688,-0.248046875,-0.294921875,-0.37890625,-0.514160156,-0.561523438,-0.560546875,-0.592285156,-0.627441406,-0.653808594,-0.686035156,-0.766601563,-0.826660156,-0.878417969,-0.971679688,-1.067382813,-1.100585938,-1.110351563,-1.069335938,-0.9765625,-0.910644531,-0.865234375,-0.817382813,-0.807128906,-0.856933594,-1.005371094,-1.120605469,-1.217773438,-1.244140625,-1.1640625,-0.9921875,-0.861816406,-0.782226563,-0.747558594,-0.758789063,-0.76953125,-0.790527344,-0.800292969,-0.791992188,-0.766113281,-0.770996094,-0.767089844,-0.749023438,-0.709960938,-0.687988281,-0.67578125,-0.666992188,-0.666015625,-0.666503906,-0.650878906,-0.643066406,-0.640136719,-0.631347656,-0.611328125,-0.608886719,-0.604003906,-0.601074219,-0.561523438,-0.512695313,-0.489746094,-0.474121094,-0.483398438,-0.501953125,-0.513671875,-0.515625,-0.533691406,-0.595214844,-0.217285156,-0.223632813,-0.219238281,-0.225585938,-0.227050781,-0.223144531,-0.2265625,-0.229980469,-0.23828125,-0.232421875,-0.231445313,-0.232910156,-0.234863281],
            ay: [0.710449219,0.711914063,0.704101563,0.707519531,0.709960938,0.708496094,0.708984375,0.709472656,0.712890625,0.710449219,0.709472656,0.7109375,0.711914063,0.711914063,0.708984375,0.702148438,0.700683594,0.697265625,0.696777344,0.690917969,0.687011719,0.682128906,0.670410156,0.659179688,0.661621094,0.643066406,0.629394531,0.620117188,0.603027344,0.584960938,0.559570313,0.523925781,0.506835938,0.469238281,0.467285156,0.45703125,0.446289063,0.426269531,0.407226563,0.393066406,0.357910156,0.328125,0.290039063,0.244628906,0.201171875,0.157714844,0.1328125,0.107421875,0.067382813,0.034667969,-0.009277344,-0.077148438,-0.149414063,-0.178710938,-0.229003906,-0.282226563,-0.330566406,-0.367675781,-0.395996094,-0.426757813,-0.468261719,-0.498046875,-0.528320313,-0.577636719,-0.629882813,-0.702148438,-0.762695313,-0.810546875,-0.863769531,-0.877441406,-0.878417969,-0.912597656,-0.926757813,-0.944824219,-0.978515625,-1.01953125,-1.047851563,-1.080078125,-1.09765625,-1.111816406,-1.125,-1.135253906,-1.145996094,-1.149902344,-1.16796875,-1.178222656,-1.177734375,-1.18359375,-1.201171875,-1.215820313,-1.21484375,-1.207519531,-1.189941406,-1.169433594,-1.143066406,-1.126464844,-1.104492188,-1.096191406,-1.094238281,-1.084472656,-1.069335938,-1.057617188,-1.041992188,-1.034179688,-1.021484375,-1.001464844,-1.3984375,-0.979980469,-0.977539063,-0.978027344,-0.972167969,-0.97265625,-0.969238281,-0.965820313,-0.967773438,-0.97265625,-0.966308594,-0.970703125,-0.97265625,-0.97265625],
            az: [0.396484375,0.395019531,0.396484375,0.397460938,0.396972656,0.40234375,0.408691406,0.405273438,0.398925781,0.401855469,0.392578125,0.395019531,0.390625,0.385742188,0.384277344,0.392578125,0.389648438,0.390136719,0.396484375,0.408203125,0.426269531,0.4375,0.451660156,0.461914063,0.473632813,0.469238281,0.469726563,0.467773438,0.48046875,0.481933594,0.480957031,0.473144531,0.466796875,0.453125,0.462402344,0.473632813,0.470703125,0.442382813,0.435058594,0.409667969,0.405273438,0.393554688,0.3671875,0.3671875,0.345703125,0.314941406,0.331054688,0.302246094,0.26953125,0.226074219,0.228515625,0.207519531,0.200195313,0.209960938,0.184082031,0.167480469,0.145507813,0.102539063,0.061523438,0.069824219,0.049316406,0.032714844,0.049804688,0.063476563,0.0859375,0.051269531,0.018554688,-0.021484375,-0.070800781,-0.112792969,-0.115234375,-0.092285156,-0.056640625,-0.020507813,0.013183594,0.01953125,0.020507813,0.000976563,-0.03515625,-0.046386719,-0.077148438,-0.092285156,-0.114257813,-0.124023438,-0.120117188,-0.088867188,-0.071289063,-0.051757813,-0.059082031,-0.070800781,-0.088378906,-0.103027344,-0.104003906,-0.107421875,-0.1171875,-0.1015625,-0.118652344,-0.110351563,-0.1015625,-0.092285156,-0.079589844,-0.083984375,-0.078613281,-0.065917969,-0.049804688,-0.022949219,-0.515136719,0.039550781,0.036132813,0.033203125,0.030761719,0.029296875,0.028808594,0.025390625,0.027832031,0.030761719,0.026855469,0.024414063,0.025878906,0.025878906],
            gx: [1.182556152,1.190185547,0.915527344,0.595092773,0.457763672,0.099182129,-0.030517578,-0.144958496,-0.015258789,0,0.312805176,0.511169434,0.663757324,1.022338867,1.220703125,1.274108887,1.457214355,1.457214355,1.220703125,1.190185547,0.518798828,-0.312805176,-1.441955566,-3.128051758,-5.218505859,-7.461547852,-10.35308838,-13.88549805,-17.63916016,-21.3394165,-24.89471436,-28.64074707,-31.48651123,-33.85162354,-36.88049316,-39.64996338,-42.56439209,-45.57037354,-49.2477417,-52.4597168,-54.93927002,-56.19812012,-56.57958984,-56.89239502,-56.99920654,-58.4487915,-60.50872803,-61.2487793,-63.17138672,-66.32995605,-69.06890869,-69.87762451,-70.83892822,-71.81549072,-71.25091553,-70.24383545,-69.50378418,-69.07653809,-69.25201416,-68.51196289,-65.65093994,-62.87384033,-60.09674072,-56.0836792,-52.42156982,-49.3850708,-49.949646,-51.87988281,-52.42156982,-52.26898193,-50.70495605,-47.8515625,-44.69299316,-41.58782959,-39.13879395,-37.07122803,-35.78186035,-35.03417969,-34.38568115,-34.25598145,-33.73718262,-33.11920166,-31.86035156,-30.79986572,-29.16717529,-27.13012695,-24.40643311,-21.68273926,-19.05822754,-15.98358154,-13.17596436,-10.67352295,-8.140563965,-6.26373291,-4.989624023,-5.783081055,-0.541687012,2.372741699,4.928588867,7.57598877,9.582519531,10.53619385,10.77270508,10.99395752,11.16943359,11.00921631,-15.47241211,-1.251220703,-1.358032227,-1.388549805,-1.403808594,-1.396179199,-1.350402832,-1.136779785,-0.946044922,-0.831604004,-0.602722168,-0.473022461,-0.221252441,0.045776367],
            gy: [-0.991821289,-1.152038574,-1.762390137,-2.403259277,-2.349853516,-2.159118652,-2.166748047,-2.212524414,-2.082824707,-2.014160156,-1.892089844,-1.22833252,-0.915527344,-1.304626465,-1.976013184,-2.540588379,-2.670288086,-2.174377441,-0.65612793,1.129150391,2.662658691,3.883361816,6.278991699,10.0402832,15.72418213,22.76611328,29.86907959,34.14154053,35.07232666,33.08105469,29.22058105,24.21569824,19.63043213,15.2130127,13.83972168,16.34216309,20.93505859,26.29852295,29.23583984,29.67071533,24.71923828,13.14544678,-1.754760742,-16.79229736,-29.40368652,-41.03851318,-49.95727539,-55.30548096,-59.45587158,-63.51470947,-68.81713867,-75.08850098,-82.66448975,-87.059021,-86.04431152,-79.6661377,-69.38934326,-57.55615234,-49.65209961,-48.36273193,-52.38342285,-66.49780273,-85.86120605,-105.5221558,-117.6757813,-109.4207764,-87.34130859,-59.53979492,-35.47668457,-20.69854736,-12.99285889,-11.73400879,-16.17431641,-23.1552124,-32.46307373,-41.58782959,-49.59869385,-55.25970459,-57.83081055,-57.92236328,-55.42755127,-50.40740967,-42.61779785,-35.24017334,-29.52575684,-25.27618408,-23.52142334,-23.68927002,-24.37591553,-24.96337891,-24.77264404,-22.97210693,-20.99609375,-20.61462402,-22.81188965,-23.17810059,-20.06530762,-15.87677002,-12.49694824,-11.0244751,-10.68878174,-9.887695313,-7.232666016,-4.669189453,-4.837036133,-7.354736328,-0.129699707,-1.937866211,-2.44140625,-2.616882324,-2.304077148,-2.311706543,-1.998901367,-1.594543457,-1.335144043,-0.991821289,-0.686645508,-0.686645508,-0.907897949,-1.495361328],
            gz: [1.953125,2.182006836,2.76184082,2.746582031,2.532958984,2.235412598,2.136230469,1.770019531,1.14440918,0.48828125,0.25177002,0.305175781,0.503540039,0.938415527,1.258850098,1.510620117,1.449584961,1.029968262,0.48828125,0.152587891,-1.075744629,-2.906799316,-5.332946777,-8.38470459,-12.02392578,-18.05877686,-24.9786377,-33.12683105,-42.5491333,-52.71148682,-63.46130371,-74.55444336,-85.5255127,-95.73364258,-107.5897217,-119.4534302,-131.5917969,-142.8070068,-153.0075073,-163.4368896,-172.8744507,-180.1300049,-187.8967285,-194.7250366,-201.6601563,-207.3974609,-213.218689,-219.6350098,-224.5254517,-227.7832031,-229.3777466,-230.4840088,-230.7662964,-233.0703735,-236.5188599,-239.9291992,-243.2861328,-245.5444336,-245.4528809,-243.1640625,-240.737915,-236.7477417,-232.5897217,-230.7891846,-231.2698364,-235.8779907,-239.8147583,-243.3624268,-245.7962036,-245.4910278,-243.812561,-242.3171997,-239.0365601,-233.6654663,-227.4627686,-221.7330933,-217.918396,-215.6906128,-215.5838013,-216.8045044,-218.9102173,-221.0235596,-222.3587036,-222.9385376,-222.2137451,-219.4595337,-215.133667,-209.8693848,-203.0181885,-194.6411133,-185.8520508,-176.9104004,-166.4581299,-155.1895142,-143.0053711,-132.3471069,-119.3466187,-107.1243286,-95.92437744,-84.85412598,-72.85308838,-61.77520752,-52.38342285,-43.77746582,-35.72845459,-28.19824219,10.78033447,1.14440918,0.701904297,0.274658203,-0.106811523,-0.663757324,-1.113891602,-1.480102539,-1.777648926,-2.174377441,-2.830505371,-3.204345703,-3.372192383,-3.479003906]
       };

    // There are more optimal ways to run this algorithm. This is the just the simplest [this is o(nxm)! ew!].
    // Please research and update for performance.
    var DTWDistance = function(input, training){
        var DTW = [], // size = n x m
            i,j, //counters
            n = input.length,
            m = training.length,
            infinity = 999999; // pretty much infinity...

        // set top row of first column of matrix as infinity
        for(i=0; i<n;i++){
            DTW[i] = []; //make this a matrix
            DTW[i][0] = infinity;
        }
        for(i=1;i<m;i++){
            DTW[0][i] = infinity;
        }

        DTW[0][0] = 0;

        // calculate distance, save in matrix
        for(i=1;i<n;i++){
            for(j=1;j<m;j++){
                cost = Math.abs((input[i] - training[j])/360);
                DTW[i][j] = cost + Math.min(DTW[i-1][j], DTW[i][j-1], DTW[i-1][j-1]);
            }
        }

        // distance between the two sets
        return DTW[n-1][m-1];
    };

    var addInput = function(data){
        var toParse = JSON.parse(data);

        Object.keys(inputs).forEach(function(option){
            inputs[option][inputs[option].length] = parseFloat(toParse[option]);
            if(inputs[option].length > 120){
                inputs[option].shift();
            }
        });

        return(isSmoking());
    };

    var isSmoking = function(){
        var total = 0;
        Object.keys(inputs).forEach(function(option){
            total += DTWDistance(inputs[option], training[option]);
        });
        return total;
    };



    window.DTW = addInput;
})(this,document);