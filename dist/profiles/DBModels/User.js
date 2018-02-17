'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');
var saltRounds = 4;

module.exports = function (_Sequelize$Model) {
    _inherits(User, _Sequelize$Model);

    function User() {
        _classCallCheck(this, User);

        return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
    }

    _createClass(User, null, [{
        key: 'init',
        value: function init(sequelize) {
            var _this2 = this;

            return _get(User.__proto__ || Object.getPrototypeOf(User), 'init', this).call(this, {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                firstName: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                lastName: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                status: {
                    type: Sequelize.STRING,
                    defaultValue: 'active'
                },
                birthdate: {
                    type: Sequelize.STRING,
                    allowNull: true
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                phoneNumber: {
                    type: Sequelize.STRING
                },
                passwordHash: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                gender: {
                    type: Sequelize.TINYINT
                },
                paymentInfo: {
                    type: Sequelize.STRING,
                    allowNull: true,
                    defaultValue: null
                }
            }, { sequelize: sequelize }, {
                hooks: {
                    beforeCreate: function beforeCreate(user, options) {
                        console.log();
                        user.password = _this2.generateHash(user.password, saltRounds);
                    }
                }
            });
        }
    }, {
        key: 'validPassword',
        value: function validPassword(testPass) {
            bcrypt.compare(testPass, this.passwordHash, function (err, res) {
                if (err) {
                    return err;
                }
                return res;
            });
        }
    }, {
        key: 'generateHash',
        value: function generateHash(pass, saltRounds) {
            bcrypt.genSalt(saltRounds, function (err, salt) {
                //generate salt using saltRounds provided
                bcrypt.hash(pass, salt, function (err, hash) {
                    //generate hash using password and salt generated
                    return hash; //returns hashed password
                });
            });
        }
    }, {
        key: 'associate',
        value: function associate(models) {}
    }]);

    return User;
}(Sequelize.Model);
//# sourceMappingURL=User.js.map