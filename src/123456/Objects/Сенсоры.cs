﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.123456
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сенсоры.
    /// </summary>
    // *** Start programmer edit section *** (Сенсоры CustomAttributes)

    // *** End programmer edit section *** (Сенсоры CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СенсорыE", new string[] {
            "Тип as \'Тип\'",
            "Id as \'Id\'"})]
    [View("СенсорыL", new string[] {
            "Тип as \'Тип\'",
            "Id as \'Id\'"})]
    public class Сенсоры : ICSSoft.STORMNET.DataObject
    {
        
        private string fТип;
        
        private int fId;
        
        // *** Start programmer edit section *** (Сенсоры CustomMembers)

        // *** End programmer edit section *** (Сенсоры CustomMembers)

        
        /// <summary>
        /// Id.
        /// </summary>
        // *** Start programmer edit section *** (Сенсоры.Id CustomAttributes)

        // *** End programmer edit section *** (Сенсоры.Id CustomAttributes)
        public virtual int Id
        {
            get
            {
                // *** Start programmer edit section *** (Сенсоры.Id Get start)

                // *** End programmer edit section *** (Сенсоры.Id Get start)
                int result = this.fId;
                // *** Start programmer edit section *** (Сенсоры.Id Get end)

                // *** End programmer edit section *** (Сенсоры.Id Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сенсоры.Id Set start)

                // *** End programmer edit section *** (Сенсоры.Id Set start)
                this.fId = value;
                // *** Start programmer edit section *** (Сенсоры.Id Set end)

                // *** End programmer edit section *** (Сенсоры.Id Set end)
            }
        }
        
        /// <summary>
        /// Тип.
        /// </summary>
        // *** Start programmer edit section *** (Сенсоры.Тип CustomAttributes)

        // *** End programmer edit section *** (Сенсоры.Тип CustomAttributes)
        [StrLen(255)]
        public virtual string Тип
        {
            get
            {
                // *** Start programmer edit section *** (Сенсоры.Тип Get start)

                // *** End programmer edit section *** (Сенсоры.Тип Get start)
                string result = this.fТип;
                // *** Start programmer edit section *** (Сенсоры.Тип Get end)

                // *** End programmer edit section *** (Сенсоры.Тип Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сенсоры.Тип Set start)

                // *** End programmer edit section *** (Сенсоры.Тип Set start)
                this.fТип = value;
                // *** Start programmer edit section *** (Сенсоры.Тип Set end)

                // *** End programmer edit section *** (Сенсоры.Тип Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СенсорыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СенсорыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СенсорыE", typeof(IIS.123456.Сенсоры));
                }
            }
            
            /// <summary>
            /// "СенсорыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СенсорыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СенсорыL", typeof(IIS.123456.Сенсоры));
                }
            }
        }
    }
}
