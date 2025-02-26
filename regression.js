     var xArray = [1, 3, 2]
      var yArray = [1, 2, 3]
      //xArray represents x coordinates of points, yArray represents y coordinates
        function leastSquares() {
            sum_xiyi = 0;
            sum_xi = 0;
            sum_yi = 0;
            sum_xi2 = 0;
            for (let i = 0; i < xArray.length; i++) {
                xi = xArray[i]
                yi = yArray[i]

                sum_xiyi += xi * yi
                sum_xi += xi
                sum_yi += yi
                sum_xi2 += xi ** 2
            }

            a1 = [sum_xi, sum_xi2]
            a2 = [xArray.length, sum_xi]
            a3 = [sum_yi, sum_xiyi]

            var a = a3[0] * a2[1] - a3[1] * a2[0]
            var b = a1[0] * a3[1] - a1[1] * a3[0]

            var det = a1[0]*a2[1]-a1[1]*a2[0]

            a = a/det
            b = b/det 

            alert(a + "x + " + b)
        }
