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
    /// Расположение.
    /// </summary>
    // *** Start programmer edit section *** (Расположение CustomAttributes)

    // *** End programmer edit section *** (Расположение CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РасположениеE", new string[] {
            "Адрес as \'Адрес\'"})]
    [View("РасположениеL", new string[] {
            "Адрес as \'Адрес\'"})]
    public class Расположение : ICSSoft.STORMNET.DataObject
    {
        
        private string fАдрес;
        
        // *** Start programmer edit section *** (Расположение CustomMembers)

        // *** End programmer edit section *** (Расположение CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (Расположение.Адрес CustomAttributes)

        // *** End programmer edit section *** (Расположение.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (Расположение.Адрес Get start)

                // *** End programmer edit section *** (Расположение.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (Расположение.Адрес Get end)

                // *** End programmer edit section *** (Расположение.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Расположение.Адрес Set start)

                // *** End programmer edit section *** (Расположение.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (Расположение.Адрес Set end)

                // *** End programmer edit section *** (Расположение.Адрес Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РасположениеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасположениеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасположениеE", typeof(IIS.123456.Расположение));
                }
            }
            
            /// <summary>
            /// "РасположениеL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасположениеL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасположениеL", typeof(IIS.123456.Расположение));
                }
            }
        }
    }
}
