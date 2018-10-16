'use strict';

module.exports = function (regl) {
  return function (n, width, height) {
    return new Array(n).fill(0).map(() => {
      var texture = regl.texture({
        width: width,
        height: height,
        type: 'float',
        wrapS: 'repeat',
        wrapT: 'repeat',
      });

      var fbo = regl.framebuffer({
        color: texture
      });

      return {
        texture: texture,
        fbo: fbo,
        width: width,
        height: height
      };
    });
  };
};
