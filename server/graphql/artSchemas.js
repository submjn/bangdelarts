var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLFloat = require('graphql').GraphQLFloat;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLDate = require('graphql-date');
var ArtModel = require('../models/Art');

var artType = new GraphQLObjectType({
    name: 'art',
    fields: function() {
        return {
            _id: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString
            },
            height: {
                type: GraphQLFloat
            },
            width: {
                type: GraphQLFloat
            },
            medium: {
                type: GraphQLString
            },
            category: {
                type: GraphQLString
            },
            sub_category: {
                type: GraphQLString
            },
            owner_collection: {
                type: GraphQLString
            },
            published_year: {
                type: GraphQLInt
            },
            date: {
                type: GraphQLDate
            },
            publisher: {
                type: GraphQLString
            },
            remarks: {
                type: GraphQLString
            },
            deven_img: {
                type: GraphQLInt
            },
            kabindra_sn: {
                type: GraphQLInt
            },
            kabindra_dsc: {
                type: GraphQLInt
            }
        }
    }
});

var queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function() {
        return {
            arts: {
                type: new GraphQLList(artType),
                resolve: function() {
                    const arts = ArtModel.find().exec()
                    if(!arts) {
                        throw new Error('Error')
                    }
                    return arts
                }
            },
            art: {
                type: artType,
                args: {
                    id: {
                        name: '_id',
                        type: GraphQLString
                    }
                },
                resolve: function(root, params) {
                    const artDetails = ArtModel.findById(params.id).exec()
                    if(!artDetails) {
                        throw new Error('Error')
                    }
                    return artDetails
                }
            }
        }
    }
});

var mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: function () {
      return {
        addArt: {
          type: artType,
          args: {
            title: {
                type: new GraphQLNonNull(GraphQLString)
            },
            height: {
                type: new GraphQLNonNull(GraphQLFloat)
            },
            width: {
                type: new GraphQLNonNull(GraphQLFloat)
            },
            medium: {
                type: new GraphQLNonNull(GraphQLString)
            },
            category: {
                type: new GraphQLNonNull(GraphQLString)
            },
            sub_category: {
                type: new GraphQLNonNull(GraphQLString)
            },
            owner_collection: {
                type: new GraphQLNonNull(GraphQLString)
            },
            published_year: {
                type: new GraphQLNonNull(GraphQLInt)
            },
            date: {
                type: new GraphQLNonNull(GraphQLDate)
            },
            publisher: {
                type: new GraphQLNonNull(GraphQLString)
            },
            remarks: {
                type: new GraphQLNonNull(GraphQLString)
            },
            deven_img: {
                type: new GraphQLNonNull(GraphQLInt)
            },
            kabindra_sn: {
                type: new GraphQLNonNull(GraphQLInt)
            },
            kabindra_dsc: {
                type: new GraphQLNonNull(GraphQLInt)
            }
          },
          resolve: function (root, params) {
            const artModel = new ArtModel(params);
            const newArt = artModel.save();
            if (!newArt) {
              throw new Error('Error');
            }
            return newArt
          }
        },
        updateArt: {
          type: artType,
          args: {
            id: {
              name: 'id',
              type: new GraphQLNonNull(GraphQLString)
            },
            title: {
                type: new GraphQLNonNull(GraphQLString)
            },
            height: {
                type: new GraphQLNonNull(GraphQLFloat)
            },
            width: {
                type: new GraphQLNonNull(GraphQLFloat)
            },
            medium: {
                type: new GraphQLNonNull(GraphQLString)
            },
            category: {
                type: new GraphQLNonNull(GraphQLString)
            },
            sub_category: {
                type: new GraphQLNonNull(GraphQLString)
            },
            owner_collection: {
                type: new GraphQLNonNull(GraphQLString)
            },
            published_year: {
                type: new GraphQLNonNull(GraphQLInt)
            },
            date: {
                type: new GraphQLNonNull(GraphQLDate)
            },
            publisher: {
                type: new GraphQLNonNull(GraphQLString)
            },
            remarks: {
                type: new GraphQLNonNull(GraphQLString)
            },
            deven_img: {
                type: new GraphQLNonNull(GraphQLInt)
            },
            kabindra_sn: {
                type: new GraphQLNonNull(GraphQLInt)
            },
            kabindra_dsc: {
                type: new GraphQLNonNull(GraphQLInt)
            }
          },
          resolve(root, params) {
            return ArtModel.findByIdAndUpdate(params.id, {
                title: params.title,
                height: params.height,
                width: params.width,
                medium: params.medium,
                category: params.category,
                sub_category: params.sub_category,
                owner_collection: params.owner_collection,
                published_year: params.published_year,
                date: new Date(),
                publisher: params.publisher,
                remarks: params.remarks,
                deven_img: params.deven_img,
                kabindra_sn: params.kabindra_sn,
                kabindra_dsc: params.kabindra_dsc
            }, function (err) {
              if (err) return next(err);
            });
          }
        },
        removeArt: {
          type: artType,
          args: {
            id: {
              type: new GraphQLNonNull(GraphQLString)
            }
          },
          resolve(root, params) {
            const remArt = ArtModel.findByIdAndRemove(params.id).exec();
            if (!remArt) {
              throw new Error('Error')
            }
            return remArt;
          }
        }
      }
    }
  });

module.exports = new GraphQLSchema({ query: queryType, mutation: mutation });