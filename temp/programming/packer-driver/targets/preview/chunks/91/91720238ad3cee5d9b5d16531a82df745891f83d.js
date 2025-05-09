System.register([], function (_export, _context) {
  "use strict";

  var Base, WordArray, BufferedBlockAlgorithm, Hasher, HMAC, Hex, Latin1, Utf8;

  _export({
    Base: void 0,
    WordArray: void 0,
    BufferedBlockAlgorithm: void 0,
    Hasher: void 0,
    HMAC: void 0
  });

  return {
    setters: [],
    execute: function () {
      /* eslint-disable no-use-before-define */

      /**
       * Base class for inheritance.
       */
      _export("Base", Base = class Base {
        /**
         * Extends this object and runs the init method.
         * Arguments to create() will be passed to init().
         *
         * @return {Object} The new object.
         *
         * @static
         *
         * @example
         *
         *     var instance = MyType.create();
         */
        static create() {
          for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return new this(...args);
        }
        /**
         * Copies properties into this object.
         *
         * @param {Object} properties The properties to mix in.
         *
         * @example
         *
         *     MyType.mixIn({
         *         field: 'value'
         *     });
         */


        mixIn(properties) {
          return Object.assign(this, properties);
        }
        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = instance.clone();
         */


        clone() {
          var clone = new this.constructor();
          Object.assign(clone, this);
          return clone;
        }

      });
      /**
       * An array of 32-bit words.
       *
       * @property {Array} words The array of 32-bit words.
       * @property {number} sigBytes The number of significant bytes in this word array.
       */


      _export("WordArray", WordArray = class WordArray extends Base {
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of 32-bit words.
         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.create();
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
         */
        constructor(words, sigBytes) {
          if (words === void 0) {
            words = [];
          }

          if (sigBytes === void 0) {
            sigBytes = words.length * 4;
          }

          super();
          var typedArray = words; // Convert buffers to uint8

          if (typedArray instanceof ArrayBuffer) {
            typedArray = new Uint8Array(typedArray);
          } // Convert other array views to uint8


          if (typedArray instanceof Int8Array || typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
          } // Handle Uint8Array


          if (typedArray instanceof Uint8Array) {
            // Shortcut
            var typedArrayByteLength = typedArray.byteLength; // Extract bytes

            var _words = [];

            for (var i = 0; i < typedArrayByteLength; i += 1) {
              _words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
            } // Initialize this word array


            this.words = _words;
            this.sigBytes = typedArrayByteLength;
          } else {
            // Else call normal init
            this.words = words;
            this.sigBytes = sigBytes;
          }
        }
        /**
         * Creates a word array filled with random bytes.
         *
         * @param {number} nBytes The number of random bytes to generate.
         *
         * @return {WordArray} The random word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.random(16);
         */


        static random(nBytes) {
          var words = [];

          var r = m_w => {
            var _m_w = m_w;
            var _m_z = 0x3ade68b1;
            var mask = 0xffffffff;
            return () => {
              _m_z = 0x9069 * (_m_z & 0xFFFF) + (_m_z >> 0x10) & mask;
              _m_w = 0x4650 * (_m_w & 0xFFFF) + (_m_w >> 0x10) & mask;
              var result = (_m_z << 0x10) + _m_w & mask;
              result /= 0x100000000;
              result += 0.5;
              return result * (Math.random() > 0.5 ? 1 : -1);
            };
          };

          for (var i = 0, rcache; i < nBytes; i += 4) {
            var _r = r((rcache || Math.random()) * 0x100000000);

            rcache = _r() * 0x3ade67b7;
            words.push(_r() * 0x100000000 | 0);
          }

          return new WordArray(words, nBytes);
        }
        /**
         * Converts this word array to a string.
         *
         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
         *
         * @return {string} The stringified word array.
         *
         * @example
         *
         *     var string = wordArray + '';
         *     var string = wordArray.toString();
         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
         */


        toString(encoder) {
          if (encoder === void 0) {
            encoder = Hex;
          }

          return encoder.stringify(this);
        }
        /**
         * Concatenates a word array to this word array.
         *
         * @param {WordArray} wordArray The word array to append.
         *
         * @return {WordArray} This word array.
         *
         * @example
         *
         *     wordArray1.concat(wordArray2);
         */


        concat(wordArray) {
          // Shortcuts
          var thisWords = this.words;
          var thatWords = wordArray.words;
          var thisSigBytes = this.sigBytes;
          var thatSigBytes = wordArray.sigBytes; // Clamp excess bits

          this.clamp(); // Concat

          if (thisSigBytes % 4) {
            // Copy one byte at a time
            for (var i = 0; i < thatSigBytes; i += 1) {
              var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
              thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
            }
          } else {
            // Copy one word at a time
            for (var _i = 0; _i < thatSigBytes; _i += 4) {
              thisWords[thisSigBytes + _i >>> 2] = thatWords[_i >>> 2];
            }
          }

          this.sigBytes += thatSigBytes; // Chainable

          return this;
        }
        /**
         * Removes insignificant bits.
         *
         * @example
         *
         *     wordArray.clamp();
         */


        clamp() {
          // Shortcuts
          var {
            words,
            sigBytes
          } = this; // Clamp

          words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
          words.length = Math.ceil(sigBytes / 4);
        }
        /**
         * Creates a copy of this word array.
         *
         * @return {WordArray} The clone.
         *
         * @example
         *
         *     var clone = wordArray.clone();
         */


        clone() {
          var clone = super.clone.call(this);
          clone.words = this.words.slice(0);
          return clone;
        }

      });
      /**
       * Hex encoding strategy.
       */


      _export("Hex", Hex = {
        /**
         * Converts a word array to a hex string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The hex string.
         *
         * @static
         *
         * @example
         *
         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
         */
        stringify(wordArray) {
          // Shortcuts
          var {
            words,
            sigBytes
          } = wordArray; // Convert

          var hexChars = [];

          for (var i = 0; i < sigBytes; i += 1) {
            var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            hexChars.push((bite >>> 4).toString(16));
            hexChars.push((bite & 0x0f).toString(16));
          }

          return hexChars.join('');
        },

        /**
         * Converts a hex string to a word array.
         *
         * @param {string} hexStr The hex string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
         */
        parse(hexStr) {
          // Shortcut
          var hexStrLength = hexStr.length; // Convert

          var words = [];

          for (var i = 0; i < hexStrLength; i += 2) {
            words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
          }

          return new WordArray(words, hexStrLength / 2);
        }

      });
      /**
       * Latin1 encoding strategy.
       */


      _export("Latin1", Latin1 = {
        /**
         * Converts a word array to a Latin1 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Latin1 string.
         *
         * @static
         *
         * @example
         *
         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
         */
        stringify(wordArray) {
          // Shortcuts
          var {
            words,
            sigBytes
          } = wordArray; // Convert

          var latin1Chars = [];

          for (var i = 0; i < sigBytes; i += 1) {
            var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            latin1Chars.push(String.fromCharCode(bite));
          }

          return latin1Chars.join('');
        },

        /**
         * Converts a Latin1 string to a word array.
         *
         * @param {string} latin1Str The Latin1 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
         */
        parse(latin1Str) {
          // Shortcut
          var latin1StrLength = latin1Str.length; // Convert

          var words = [];

          for (var i = 0; i < latin1StrLength; i += 1) {
            words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
          }

          return new WordArray(words, latin1StrLength);
        }

      });
      /**
       * UTF-8 encoding strategy.
       */


      _export("Utf8", Utf8 = {
        /**
         * Converts a word array to a UTF-8 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-8 string.
         *
         * @static
         *
         * @example
         *
         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
         */
        stringify(wordArray) {
          try {
            return decodeURIComponent(escape(Latin1.stringify(wordArray)));
          } catch (e) {
            throw new Error('Malformed UTF-8 data');
          }
        },

        /**
         * Converts a UTF-8 string to a word array.
         *
         * @param {string} utf8Str The UTF-8 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
         */
        parse(utf8Str) {
          return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
        }

      });
      /**
       * Abstract buffered block algorithm template.
       *
       * The property blockSize must be implemented in a concrete subtype.
       *
       * @property {number} _minBufferSize
       *
       *     The number of blocks that should be kept unprocessed in the buffer. Default: 0
       */


      _export("BufferedBlockAlgorithm", BufferedBlockAlgorithm = class BufferedBlockAlgorithm extends Base {
        constructor() {
          super();
          this._minBufferSize = 0;
        }
        /**
         * Resets this block algorithm's data buffer to its initial state.
         *
         * @example
         *
         *     bufferedBlockAlgorithm.reset();
         */


        reset() {
          // Initial values
          this._data = new WordArray();
          this._nDataBytes = 0;
        }
        /**
         * Adds new data to this block algorithm's buffer.
         *
         * @param {WordArray|string} data
         *
         *     The data to append. Strings are converted to a WordArray using UTF-8.
         *
         * @example
         *
         *     bufferedBlockAlgorithm._append('data');
         *     bufferedBlockAlgorithm._append(wordArray);
         */


        _append(data) {
          var m_data = data; // Convert string to WordArray, else assume WordArray already

          if (typeof m_data === 'string') {
            m_data = Utf8.parse(m_data);
          } // Append


          this._data.concat(m_data);

          this._nDataBytes += m_data.sigBytes;
        }
        /**
         * Processes available data blocks.
         *
         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
         *
         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
         *
         * @return {WordArray} The processed data.
         *
         * @example
         *
         *     var processedData = bufferedBlockAlgorithm._process();
         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
         */


        _process(doFlush) {
          var processedWords; // Shortcuts

          var {
            _data: data,
            blockSize
          } = this;
          var dataWords = data.words;
          var dataSigBytes = data.sigBytes;
          var blockSizeBytes = blockSize * 4; // Count blocks ready

          var nBlocksReady = dataSigBytes / blockSizeBytes;

          if (doFlush) {
            // Round up to include partial blocks
            nBlocksReady = Math.ceil(nBlocksReady);
          } else {
            // Round down to include only full blocks,
            // less the number of blocks that must remain in the buffer
            nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
          } // Count words ready


          var nWordsReady = nBlocksReady * blockSize; // Count bytes ready

          var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes); // Process blocks

          if (nWordsReady) {
            for (var offset = 0; offset < nWordsReady; offset += blockSize) {
              // Perform concrete-algorithm logic
              this._doProcessBlock(dataWords, offset);
            } // Remove processed words


            processedWords = dataWords.splice(0, nWordsReady);
            data.sigBytes -= nBytesReady;
          } // Return processed words


          return new WordArray(processedWords, nBytesReady);
        }
        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = bufferedBlockAlgorithm.clone();
         */


        clone() {
          var clone = super.clone.call(this);
          clone._data = this._data.clone();
          return clone;
        }

      });
      /**
       * Abstract hasher template.
       *
       * @property {number} blockSize
       *
       *     The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
       */


      _export("Hasher", Hasher = class Hasher extends BufferedBlockAlgorithm {
        constructor(cfg) {
          super();
          this.blockSize = 512 / 32;
          /**
           * Configuration options.
           */

          this.cfg = Object.assign(new Base(), cfg); // Set initial values

          this.reset();
        }
        /**
         * Creates a shortcut function to a hasher's object interface.
         *
         * @param {Hasher} SubHasher The hasher to create a helper for.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
         */


        static _createHelper(SubHasher) {
          return (message, cfg) => new SubHasher(cfg).finalize(message);
        }
        /**
         * Creates a shortcut function to the HMAC's object interface.
         *
         * @param {Hasher} SubHasher The hasher to use in this HMAC helper.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
         */


        static _createHmacHelper(SubHasher) {
          return (message, key) => new HMAC(SubHasher, key).finalize(message);
        }
        /**
         * Resets this hasher to its initial state.
         *
         * @example
         *
         *     hasher.reset();
         */


        reset() {
          // Reset data buffer
          super.reset.call(this); // Perform concrete-hasher logic

          this._doReset();
        }
        /**
         * Updates this hasher with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {Hasher} This hasher.
         *
         * @example
         *
         *     hasher.update('message');
         *     hasher.update(wordArray);
         */


        update(messageUpdate) {
          // Append
          this._append(messageUpdate); // Update the hash


          this._process(); // Chainable


          return this;
        }
        /**
         * Finalizes the hash computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The hash.
         *
         * @example
         *
         *     var hash = hasher.finalize();
         *     var hash = hasher.finalize('message');
         *     var hash = hasher.finalize(wordArray);
         */


        finalize(messageUpdate) {
          // Final message update
          if (messageUpdate) {
            this._append(messageUpdate);
          } // Perform concrete-hasher logic


          var hash = this._doFinalize();

          return hash;
        }

      });
      /**
       * HMAC algorithm.
       */


      _export("HMAC", HMAC = class HMAC extends Base {
        /**
         * Initializes a newly created HMAC.
         *
         * @param {Hasher} SubHasher The hash algorithm to use.
         * @param {WordArray|string} key The secret key.
         *
         * @example
         *
         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
         */
        constructor(SubHasher, key) {
          super();
          var hasher = new SubHasher();
          this._hasher = hasher; // Convert string to WordArray, else assume WordArray already

          var _key = key;

          if (typeof _key === 'string') {
            _key = Utf8.parse(_key);
          } // Shortcuts


          var hasherBlockSize = hasher.blockSize;
          var hasherBlockSizeBytes = hasherBlockSize * 4; // Allow arbitrary length keys

          if (_key.sigBytes > hasherBlockSizeBytes) {
            _key = hasher.finalize(key);
          } // Clamp excess bits


          _key.clamp(); // Clone key for inner and outer pads


          var oKey = _key.clone();

          this._oKey = oKey;

          var iKey = _key.clone();

          this._iKey = iKey; // Shortcuts

          var oKeyWords = oKey.words;
          var iKeyWords = iKey.words; // XOR keys with pad constants

          for (var i = 0; i < hasherBlockSize; i += 1) {
            oKeyWords[i] ^= 0x5c5c5c5c;
            iKeyWords[i] ^= 0x36363636;
          }

          oKey.sigBytes = hasherBlockSizeBytes;
          iKey.sigBytes = hasherBlockSizeBytes; // Set initial values

          this.reset();
        }
        /**
         * Resets this HMAC to its initial state.
         *
         * @example
         *
         *     hmacHasher.reset();
         */


        reset() {
          // Shortcut
          var hasher = this._hasher; // Reset

          hasher.reset();
          hasher.update(this._iKey);
        }
        /**
         * Updates this HMAC with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {HMAC} This HMAC instance.
         *
         * @example
         *
         *     hmacHasher.update('message');
         *     hmacHasher.update(wordArray);
         */


        update(messageUpdate) {
          this._hasher.update(messageUpdate); // Chainable


          return this;
        }
        /**
         * Finalizes the HMAC computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The HMAC.
         *
         * @example
         *
         *     var hmac = hmacHasher.finalize();
         *     var hmac = hmacHasher.finalize('message');
         *     var hmac = hmacHasher.finalize(wordArray);
         */


        finalize(messageUpdate) {
          // Shortcut
          var hasher = this._hasher; // Compute HMAC

          var innerHash = hasher.finalize(messageUpdate);
          hasher.reset();
          var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
          return hmac;
        }

      });
    }
  };
});
//# sourceMappingURL=91720238ad3cee5d9b5d16531a82df745891f83d.js.map